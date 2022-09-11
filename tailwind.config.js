/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.tsx", "./scripts/build.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#a25656",
      },
    },
  },
  plugins: [],
};
