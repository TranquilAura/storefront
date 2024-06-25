const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Libre Baskerville', ...defaultTheme.fontFamily.sans],
				serif: ['Libre Baskerville', ...defaultTheme.fontFamily.serif],
				prata: ['Prata', 'serif'],
			},
		},
	},
	plugins: [require('tailwindcss-safe-area')],
}
