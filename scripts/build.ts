import fs from "node:fs";
import path from "node:path";
import { config } from "dotenv-safe";
import { minify } from "html-minifier";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { HomePage } from "#/pages/home";
import { cvData } from "../data/cv";

config();

const main = async () => {
  const url = process.env.DATA_URL;

  if (!url) {
    throw new Error("Invalid URL.");
  }

  const document = createElement(HomePage, cvData);

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
<body class="antialiased dark:bg-black dark:text-neutral-100">
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

main()
  .then(() => {
    console.log("Build successful.");
  })
  .catch((error: unknown) => {
    console.log("An error occurred.", error);
  });
