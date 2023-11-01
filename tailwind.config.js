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
      'subtitle': "#FFE1DA",//"#EEEEFF",
      'cool': "#639FAB",
    }
  },
  plugins: [],
}

