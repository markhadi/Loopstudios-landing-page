/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
        darkgray: "hsl(0, 0%, 55%)",
        verydarkgray: "hsl(0, 0%, 41%)",
        "verydarkgray-70": "hsla(0, 0%, 41%, 70%)",
      },
      fontFamily: {
        alata: "Alata",
        josefin: "Josefin Sans",
      },
    },
  },
  plugins: [],
};
