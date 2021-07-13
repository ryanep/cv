import fs from 'fs';
import path from 'path';
import React, { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { cvData } from '../data/cv';
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

const init = async () => {
  const sheet = new ServerStyleSheet();

  const document = createElement(App, {
    data: cvData,
    sheet,
  });
  const html = renderToString(document);
  const styles = sheet.getStyleTags();
  sheet.seal();

  const output = `<!doctype html>
<html>
<head>
  ${styles}
</head>
<body>
  ${html}
</body>
</html>`;

  await fs.promises.writeFile(
    path.join(process.cwd(), './dist/index.html'),
    output,
  );
};

init();
