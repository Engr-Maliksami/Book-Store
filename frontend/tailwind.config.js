/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {  
    extend: {
      colors: {
        'primary': '#FFCE1A',
        'secondary':'#0D08842',
        'blackBG': '#F3F3F3', 
        'favorite':'#FF5831',
      },
      fontFamily:{
      'primary':["Montserrat", "sans-serif"],
      'secondary':  ["Nunito Sans", "sans-serif"],
      
      }
    },
  },
  plugins: [],
}

  