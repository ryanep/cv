import fs from 'fs';
import path from 'path';
import { config } from 'dotenv-safe';
import fetch from 'node-fetch';
import React, { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Home } from '../src/pages/home';
import { Data } from '../src/types/data';

config();

interface AppProps {
  data: Data;
  sheet: ServerStyleSheet;
}

const App: React.FC<AppProps> = ({ data, sheet }) => {
  return (
    <StyleSheetManager sheet={sheet.instance}>
      <Home {...data} />
    </StyleSheetManager>
  );
};

const fetchData = async (url: string): Promise<Data | null> => {
  if (process.env.NODE_ENV === 'development') {
    const data = await fs.promises.readFile(
      path.join(process.cwd(), './data/cv.json'),
      'utf8',
    );
    const cvData = JSON.parse(data) as Data;
    return cvData;
  }

  const response = await fetch(url);

  if (response.ok) {
    const data = (await response.json()) as Data;
    return data;
  }

  return null;
};

const init = async () => {
  const url = process.env.DATA_URL;

  if (!url) {
    process.exit(1);
  }

  const data = await fetchData(url);

  if (!data) {
    process.exit(1);
  }

  const sheet = new ServerStyleSheet();
  const document = createElement(App, {
    data,
    sheet,
  });
  const html = renderToString(document);
  const styles = sheet.getStyleTags();
  sheet.seal();

  const output = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>CV - Ryan Elliott-Potter</title>
  ${styles}
</head>
<body>
  ${html}
</body>
</html>`;

  await fs.promises.mkdir(path.join(process.cwd(), './dist'), {
    recursive: true,
  });

  await fs.promises.writeFile(
    path.join(process.cwd(), './dist/index.html'),
    output,
  );
};

init();
