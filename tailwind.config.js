/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray_light: '#d3dce6',
        primary: '#1fb6ff',
        danger: '#7e5bef'
      }
    }
  },
  plugins: []
}
