/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				text: {
					DEFAULT: 'rgb(163 163 163)',
					lighter: '#fff',
					btn: "rgb(212 212 212)",
				},
				
				background: {
					DEFAULT: 'rgb(0 0 0)',
					lighter: 'rgb(23 23 23)',
				},
				'header-gradient-color' : {
					DEFAULT: '#065f46',
				},
				primary:{
					DEFAULT: 'rgb(34 197 94)',
				},
			},
		},
	},
	plugins: [],
}
