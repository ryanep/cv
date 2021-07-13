import fs from 'fs';
import path from 'path';
import React, { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import fetch from 'node-fetch';
import { Data } from '../src/types/data';
import Home from '../src/pages/home';

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

const fetchData = async (url: string): Promise<Data> => {
  const response = await fetch(url);
  if (response.ok) {
    const data: Data = await response.json();
    return data;
  }

  return null;
};

const init = async () => {
  const url = process.env.DATA_URL;
  const data = await fetchData(url);
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
