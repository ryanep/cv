import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import { config } from "dotenv-safe";
import { minify } from "html-minifier";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { Home, type HomeProps } from "#/pages/home";
import { cvData } from "../data/cv";

config();

const fetchData = async (url: string): Promise<HomeProps | null> => {
  if (process.env.NODE_ENV === "development") {
    return cvData;
  }

  const response = await fetch(url);

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as HomeProps;

  return data;
};

const main = async () => {
  const url = process.env.DATA_URL;

  if (!url) {
    process.exit(1);
  }

  const data = await fetchData(url);

  if (!data) {
    process.exit(1);
  }

  const document = createElement(Home, data);

  const html = renderToString(document);

  const output = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="description" content="A full stack JavaScript developer - Ryan Elliott-Potter" />
  <title>CV - Ryan Elliott-Potter</title>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body class="antialiased">
  ${html}
</body>
</html>`;

  await fs.promises.mkdir(path.join(process.cwd(), "./dist"), {
    recursive: true,
  });

  await fs.promises.writeFile(
    path.join(process.cwd(), "./dist/index.html"),
    minify(output, {
      collapseWhitespace: true,
    })
  );
};

main();
