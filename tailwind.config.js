/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./views/**/*.ejs"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          paddingLeft: '6.25vw',
          paddingRight: '6.25vw',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen md': {
            paddingLeft: '12.5vw',
            paddingRight: '12.5vw',
          },
          '@screen 3xl': {
            maxWidth: '1920px',
            paddingLeft: '240px',
            paddingRight: '240px',
          },
        }
      });
    }
  ],
}