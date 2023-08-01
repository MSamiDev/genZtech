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
      animation: {
        'spin-slow': 'spin 4s ease infinite',
      },

      spacing:{
        "2p": "2%",
        "3p": "3%",
        "4p": "4%",
        "5p": "5%",
        "7p":"7%",
        "11p":"11%",
        "3w": "3vw",
        "5w": "5vw",
        "6w": "6vw",
        "7w": "7vw",
        "10w": "10vw",
        "20w": "20vw",
        "30w": "30vw",
        "40w": "40vw",
        "50w": "50vw",
        "60w": "60vw",
        "70w": "70vw",
        "80w": "80vw",


      } ,
      
    },
  },
  plugins: [],
}

