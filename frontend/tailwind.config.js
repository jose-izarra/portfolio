/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,css,module.css}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx,css,module.css}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,css,module.css}"
  ],
  theme: {
    extend: {},
    colors: {
      'background': "#222222",
      'title': "#FFE1DA",//"#E88349",//"#F39C6B", 
      // 'subtitle': "#FFE1DA",//"#EEEEFF",
      'subtitle': "#BB00CC",
      'black': "#000",
      'white': '#ffffff',
      // 'cool': "#639FAB",
      // 'cool-2' : "hsla(165, 100%, 40%, 1)",
      'cool' : "hsla(175, 100%, 40%, 1)",
      'ok' : "#cbd5e1",
      "lightbg-text" : "#5a5a66",
      'darkbg-text' : "#cbd5e1",
      'nav-links': 'hsla(11, 100%, 93%, 1);'
    }
  },
  plugins: [],
}

