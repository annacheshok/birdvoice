/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      primary: '#216F75', // Бирюзовый
      secondary: '#DED8BC', // Желтый
      black: '#1B1810', // Черный
      white: '#EEF0F5', // Белый
    },
  },
  plugins: [],
}

