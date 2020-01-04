variable "name" {}
variable "aws_region" {}
variable "aws_bucket_name" {}
variable "aws_certificate_arn" {}
variable "subdomain" {}
variable "domain" {}
variable "digital_ocean_token" {}

locals {
  s3_origin_id = "S3-${var.subdomain}.${var.domain}"
}

terraform {
  backend "s3" {
    bucket  = "ryanep-infrastructure"
    key     = "cv.tfstate"
    region  = "eu-west-2"
    encrypt = true
  }
}

provider "aws" {
  region = "${var.aws_region}"
}

resource "aws_s3_bucket" "cdn" {
  bucket = "${var.aws_bucket_name}"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "404.html"
  }
}

resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "access-identity-${var.name}"
}

resource "aws_cloudfront_distribution" "cdn_s3_distribution" {
  origin {
    domain_name = "${aws_s3_bucket.cdn.website_endpoint}"
    origin_id   = "${local.s3_origin_id}"

    custom_origin_config {
      http_port              = "80"
      https_port             = "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  aliases             = ["${var.subdomain}.${var.domain}"]
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  ordered_cache_behavior {
    path_pattern     = "*"
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = "${local.s3_origin_id}"

    forwarded_values {
      query_string = false
      headers      = ["Origin"]

      cookies {
        forward = "none"
      }
    }

    min_ttl                = 0
    default_ttl            = 86400
    max_ttl                = 31536000
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "${local.s3_origin_id}"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "allow-all"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  viewer_certificate {
    acm_certificate_arn = "${var.aws_certificate_arn}"
    ssl_support_method  = "sni-only"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}

provider "digitalocean" {
  token = "${var.digital_ocean_token}"
}

resource "digitalocean_record" "cdn_record" {
  domain = "${var.domain}"
  type   = "CNAME"
  name   = "${var.subdomain}"
  value  = "${aws_cloudfront_distribution.cdn_s3_distribution.domain_name}."
}
