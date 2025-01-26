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
      keyframes: {
        "shift-left": {
          "0%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0)" },
        },
        "shift-right": {
          "0%": { transform: "translateX(-10px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "shift-left": "shift-left 0.3s ease-in-out",
        "shift-right": "shift-right 0.3s ease-in-out",
      },
    },
    plugins: [],
  },
};
