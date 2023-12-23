/* eslint-disable unicorn/prefer-module */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.tsx", "./scripts/build.tsx"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: "#a25656",
      },
    },
  },
};
