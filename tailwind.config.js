/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#013D6A",
        customGray: "#F2F3F6",
        customRed: "#C33527",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};
