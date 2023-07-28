/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      blur:{
        "4xl":"80px",
        "5xl":"100px",
        "6xl":"120px"
      },
    },
  },
  plugins: [],
}

