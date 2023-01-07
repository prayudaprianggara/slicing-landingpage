/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html, js}'],
  theme: {
    extend: {
      colors: {
        darkGrey: '#6B7280',
        activeWarning: 'var(--activeWarning)',
        colorPrimary: 'var(--colorPrimary)',
        systemColor: 'var(--systemColor)',
        secondaryColor: 'var(--secondaryColor)',
        colorRed: 'var(--colorRed)',
        colorOrange: 'var(--colorOrange)',
        colorDarkOrange: 'var(--colorDarkOrange)',
        colorPurple: 'var(--colorPurple)',
        colorDarkRed: 'var(--colorDarkRed)',
        colorDarkBrown: 'var(--colorDarkBrown)',
        colorNavy: 'var(--colorNavy)',
        colorDarkPurple: 'var(--colorDarkPurple)'
      },
    },
  },
  plugins: [],
}
