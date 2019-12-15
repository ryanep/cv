import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const Global = createGlobalStyle`
  @page {
    margin: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box
  }

  ${reset} html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: 100%;

    @media print {
      font-size: 60%;
    }
  }

  body {
    min-width: 32rem;
    margin: 0;
    color: #555555;
    font-size: 1.4rem;
    line-height: 1.5;
  }

  select {
    appearance: none;
  }
`;
