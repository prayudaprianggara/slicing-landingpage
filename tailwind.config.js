/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html, js}'],
  theme: {
    extend: {
      colors: {
        darkGrey: '#6B7280',
        activeWarning: 'var(--activeWarning)',
        colorPrimary: 'var(--colorPrimary)',
      },
    },
  },
  plugins: [],
}
