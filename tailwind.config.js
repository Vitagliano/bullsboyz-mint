const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        black: "#1B1B1B",
        moreblack: "#030303",
        semitransparent: "rgba(0, 0, 0, 0.5)",
        brown: {
          100: "#2E1910",
          200: "#523325",
        },
        grey: {
          100: "#f1f2f8",
          200: "#B5BCB3",
        },
        mintgreen: {
          100: "#173d1a",
          200: "#0e2510",
        },
        green: {
          100: "#7dbf5d",
          200: "#638038",
          300: "#2b4922",
          400: "#244016",
        },
        blue: {
          100: "#9AC4FF",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["Pixellari", ...defaultTheme.fontFamily.sans],
      },
      height: {
        200: "120rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
