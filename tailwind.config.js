/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#61588f",
        secondary: "#3f54c5",
        tertiary: "#bf003c",

        background: "#f8f9fb",
        surface: "#ffffff",
        "surface-container": "#f1f3f5",

        "primary-container": "#cabefe",
        "secondary-container": "#dee0ff",
        "tertiary-container": "#ff9ea5"
      }
    }
  },
  plugins: []
};