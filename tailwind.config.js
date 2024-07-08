/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./views/**/*.ejs",
  ],
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
        }
      });
    }
  ],
  theme: {
		extend: {
			borderColor: {
				'default': 'currentColor',
			},
			maxWidth: {
				'container': '1110px',
				'readable': '80ch',
			},
		},
	  fontFamily: {
			'sans': ['"Open Sans"', 'sans-serif'],
			'serif': ['"PT Serif"', 'serif'],
			'mono': ['"Open Sans"', 'monospace'],
			'display': ['"Open Sans"', 'sans-serif'],
			'body': ['"Open Sans"', 'sans-serif'],
		},
		colors: {
			'white': '#ffffff',
			'black': '#000000',
			'crimson': '#9E1B32',
			'red-bright': '#EB3349',
			'gray-blue': '#ACB2B7',
			'gray-bronze': '#BDB6AD',
			'gray-boulder': '#747474',
			'gray-metal': '#383A35',
			'gray-mercury': '#E4E4E4',
			'gray-gallery': '#F0F0F0',
			'blue-astronaut': '#003D5B',
			'blue-bright': '#2697FF',
			'blue-eastern': '#219EBC',
			'blue-cornflower': '#8ECAE6',
			'currentColor': 'currentColor',
			'transparent': 'transparent',
			'neon-green': '#39FF14'
		}
	},
}