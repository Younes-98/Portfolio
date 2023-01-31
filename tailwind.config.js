module.exports = {
  content: [
  "./src/App.js",
  './public/index.html',
  "./src/**/*.{html,js,jsx}",
  "./src/pages/**/*.{js,jsx,ts,tsx}",
  "./src/layout/**/*.{js,jsx}",
  "./src/components/**/*.{js,jsx}",
],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}