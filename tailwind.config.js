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
      spacing:{
        "3p": "3%",
        "4p": "4%",
        "5p": "5%",
        "7p":"7%",
        "11p":"11%"
      } ,
      
    },
  },
  plugins: [],
}

