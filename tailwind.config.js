/* eslint-disable unicorn/prefer-module */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./scripts/build.ts"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: "#a25656",
      },
    },
  },
};
