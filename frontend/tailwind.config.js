/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,css,module.css}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx,css,module.css}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,css,module.css}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "hsla(175, 100%, 40%, 1)",
        "secondary-color": "hsla(0, 0%, 50%, 1)",
        
        'background': "#222222",
        'title': "#FFE1DA",//"#E88349",//"#F39C6B", 
        // 'subtitle': "#FFE1DA",//"#EEEEFF",
        'subtitle': "#BB00CC",
        
        'white-color': 'hsla(162, 0%, 90%)',
        'black-color': 'hsla(162, 50%, 10%, 1)',

        'cool' : "hsla(175, 100%, 40%, 1)",
        'ok' : "#cbd5e1",
        "lightbg-text" : "#5a5a66",
        'darkbg-text' : "#cbd5e1",
        'nav-links': 'hsla(175, 100%, 30%, 1)'
      },
    },
    
  },
  plugins: [],
}

