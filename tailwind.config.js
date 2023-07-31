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
      keyframes:{
       fadeInOut:{
        '0%, 100%':{ opacity:' 0' },
        '50%':{ opacity:' 1' },
      },
    },
    // animation:{

      
    //   'animate-fade-in-out':{
    //     animation-name: 'fadeInOut'
    //     animation-timing-function: 'ease-in-out'
    //     animation-iteration-count: 'infinite'
    //     animation-duration:'3s'
    //   },
    // },
      
    },
  },
  plugins: [],
}

