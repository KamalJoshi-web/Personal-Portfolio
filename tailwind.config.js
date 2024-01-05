/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      notoJP: ["Noto Sans JP", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
    },
    extend: {
      colors: {
        Turquoise: "#36D1DC",
        RoyalBlue: "#5B86E5",
        BrightOrange: "#F39C12",
        LightLavender: "#F4F4F8",
        LightGray: "#F5F5F5",
        Peach: "#FFCBA4",
        // Dark Mode
        DarkBlueishBlack: "#1E272E",
      },
      boxShadow: {
        "3xl":
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      },
    },
  },
  plugins: [],
};
