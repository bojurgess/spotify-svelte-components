/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [function({ addUtilities, addComponents, e, config, theme }) {
    theme({
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    })
  }],
}
