const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "primary-color": "hsl(var(--primary-color))",
        "darker-primary-color": "hsl(var(--darker-primary-color))",
        "secondary-color": "hsl(var(--secondary-text-color))",

        "primary-text-color": "hsl(var(--primary-text-color))",
        "secondary-text-color": "hsl(var(--secondary-text-color))",
        "secondary-text-color-light": "hsl(var(--secondary-text-color-light))",

        "light-background-color": "var(--light-background-color)",
        "dark-background-color": "var(--dark-background-color)",


        // delete others
        "project-border-color": "hsla(162, 10%, 70%, 0.7)",
        'background': "#222222",
        "lightbg-text" : "#5a5a66",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
