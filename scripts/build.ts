import fs from "node:fs";
import path from "node:path";
import { minify } from "html-minifier";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { HomePage } from "#/pages/home";
import { cvData } from "../data/cv";

const outputPath = path.join(process.cwd(), "./dist");

const main = async () => {
  const document = createElement(HomePage, cvData);
  const html = renderToString(document);

  const output = minify(
    `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="description" content="${cvData.description}" />
  <title>${cvData.title}</title>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body class="antialiased dark:bg-black dark:text-neutral-100">
  ${html}
</body>
</html>`,
    {
      collapseWhitespace: true,
    }
  );

  await fs.promises.mkdir(outputPath, {
    recursive: true,
  });

  await fs.promises.writeFile(path.join(outputPath, "index.html"), output);
};

main()
  .then(() => {
    console.log("Build successful.");
  })
  .catch((error: unknown) => {
    console.log("An error occurred.", error);
  });
