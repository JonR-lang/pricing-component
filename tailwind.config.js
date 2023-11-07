/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**.{html,js}"],
  theme: {
    extend: {
      colors: {
        veryLightGrayishBlue: "hsl(240, 78%, 98%)",
        lightGrayishBlue: "hsl(234, 14%, 74%)",
        grayishBlue: "hsl(233, 13%, 49%)",
        darkGrayishBlue: "hsl(232, 13%, 33%)",
        buttonAccent1: "hsl(236, 72%, 79%)",
        buttonAccent2: "hsl(237, 63%, 64%)",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif;"],
      },
    },
  },
  plugins: [],
};
