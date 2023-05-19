/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			black: '#000000',
			secondary: '#D8D8D8',
			lime: '#DEF81D',
		},
		screens: {
			sm: '320px',
			// => @media (min-width: 320px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1440px',
			// => @media (min-width: 1440px) { ... }
		},
		extend: {
			fontFamily: {
				manrope: ['Manrope', 'sans'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
