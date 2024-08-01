/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
				second: '#f7f7f7',
			},
			maxWidth: {
				main: '1400px',
			},
			animation: {
				scroll:
				  "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			},
			keyframes: {
				scroll: {
				  to: {
					transform: "translate(calc(-50% - 0.5rem))",
				  },
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), addVariablesForColors],
}


function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }