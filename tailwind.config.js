/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{ts,tsx,mdx}',
		'./components/**/*.{ts,tsx,mdx}',
		'./app/**/*.{ts,tsx,mdx}',
		'./src/**/*.{ts,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			boxShadow: {
				clean: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
			},
			colors: {
				main: '#051D40',
				second: '#fafafa',
			},
			maxWidth: {
				main: '1400px',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
