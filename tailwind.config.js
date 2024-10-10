/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '960px',
      lg: '1440px',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
