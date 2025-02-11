build:
	NODE_ENV=production npm run build
deploy:
	aws s3 sync ./dist/ s3://cv.ryanep.com --delete --acl public-read && \
	aws cloudfront create-invalidation --distribution-id E1WLLUZ9KKFMY0 --paths "/*"
clean:
	rm -rf ./public
release: clean build deploy
