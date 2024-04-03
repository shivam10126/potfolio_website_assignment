/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 10px rgba(0,0,0,.09)',
      },
      colors:{
        'primary':'#62A388',
        'primary2':'#1C82AD',
        'secondary':'#00337C',
        'secondary2':'#343434',
      },
      screens: {
        'phone': '440px',
        'tab': '550px',
        'nav': '1000px',
        'bigtab': '900px',
      },
      keyframes:{
        'blink':{
          '0%': {opacity: .1,transform:'scale(0.7)' },
          '20%': {opacity: 1,transform:'scale(1)'},
          '100%': {opacity: .1,transform:'scale(0.7)'}
        },
        'left':{
          '0%': {opacity:0,transform:'translateX(10px)' },
          '100%': {opacity:1,transform:'translateX(0)'}
        },
        'fall': {
          "0%": {opacity:1}, 
          "50%": {opacity:0.5},
          "100%": {opacity:0},
        },
        'border': {
          '0%': {borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'},
        '50%': {borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%'},
        '100%': {borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'}
        },
        'arrow': {
          '0%': {transform: 'translateX(0)'},
        '50%': {transform: 'translateX(10px)'},
        '100%': {transform: 'translateX(-10px)'},
        },
        
      },
      animation:{
        'border':'border 3s infinite',
        'blink':'blink 1.5s infinite',
        'arrow':'arrow 1.5s infinite',
        'fall':'fall 0.3s forwards ',
        'left':'left 0.7s forwards ',
      }
    },
  },
  plugins: [],
}