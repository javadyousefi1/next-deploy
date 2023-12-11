/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#60A5FA",
        mainBorder: "#DBEBFF",
        borderHover: "#cce3ff",
        buttonHover: "#4c97f3",
        textColor: "#111",
        sortBg: "#e3f0ff",
        mainRed: "#ef4444",
        sortText: "#06418b",
        mainBlack: "#111111",
      },
    },
    fontFamily: {
      iranSans: ["IRANSans"],
      fontawesome: ["fontawesome6"],
      "iransans-thin": ["iransansx-num-thin"],
      "iransans-light": ["iransansx-num-light"],
      "iransans-medium": ["iransansx-num-medium"],
      "iransans-regular": ["iransansx-num-regular"],
      "iransans-demibold": ["iransansx-num-demibold"],
      "iransans-bold": ["iransansx-num-bold"],
    },
  },
  plugins: [],
};
