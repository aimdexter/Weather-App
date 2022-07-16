/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../weather-app/src/**/*.{html,js}"],
  content: ["../weather-app/*"],
  content: ["../weather-app/public/*"],
  theme: {
    extend: {},
  },
  plugins: ["../weather-app/public/*"],
}