/* eslint-env node */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        "3xl": "1600px",
        "4xl": "1920px",
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
        },
      },
      fontFamily: {
        bodoni: ["Bodoni Moda", "serif"],
      },
      letterSpacing: {
        tightest: "-.075em",
        widest: ".25em",
      },
      strokeWidth: {
        0.8: "0.8px",
        4: "4px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    require("flowbite/plugin"),
  ],
};
