/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {},
    colors: {
      'main': "#222222",
      'title': "#F39C6B",
      'subtitle': "#EEEEFF",
      'cool': "#639FAB",
    }
  },
  plugins: [],
}

