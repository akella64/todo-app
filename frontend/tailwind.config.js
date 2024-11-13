/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				main: '#6C63FF',
				white: '#F7F7F7',
				black: '#252525',
			},
		},
	},
	plugins: [],
};
