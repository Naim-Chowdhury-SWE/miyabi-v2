/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        golden: "#DCCA87",
      },
      letterSpacing: {
        widest2: ".15em",
        widest3: ".2em",
      },
      fontFamily: {
        cormorant: ["Cormorant Upright", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        chowfun: ["Chow Fun", "sans-serif"],
      },
    },
    plugins: [],
  },
};
