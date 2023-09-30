/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1440px",
    },
    extend: {
      colors: {
        primary: "#0065FF",
      },
    },
  },
  plugins: [],
};
