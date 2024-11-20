/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
	darkMode: 'selector',
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./src/styles/global.css',
	],
	theme: {
		fontFamily: {
			sans: ['Kanit', 'Arial', 'sans-serif'],
		},
		extend: {
			container: {
				center: true,
				padding: '1rem',
			},
			colors: {
				shadowMain: 'var(--shadowMain)',
				darkMain: 'var(--darkMain)',
				main: 'var(--main)',
				white: 'var(--white)',
				black: 'var(--black)',
				red: 'var(--red)',
				green: 'var(--green)',
			},
			spacing: {
				0: '0',
				5: '.3125rem',
				10: '0.625rem',
				15: '.9375rem',
				20: '1.25rem',
				30: '1.875rem',
				40: '2.5rem',
				50: '3.125rem',
				60: '3.75rem',
				70: '4.375rem',
				80: '5rem',
				90: '5.625rem',
				100: '6.25rem',
			},
		},
	},
	plugins: [
		// Example: dark-curtain-[#000]
		plugin(function ({ matchComponents, theme }) {
			matchComponents(
				{
					'dark-curtain': value => ({
						'&:after': {
							content: '""',
							display: 'block',
							width: '100%',
							height: 'inherit',
							background: value,
							position: 'absolute',
							top: '0',
							left: '0',
							zIndex: '8',
							borderRadius: 'inherit',
							maxHeight: 'inherit',
							minHeight: 'inherit',
						},
					}),
				},
				{
					values: theme('colors'),
					type: ['color'],
				},
			);
		}),
		// Example: svg-fill-[#000]
		plugin(function ({ matchComponents, theme }) {
			matchComponents(
				{
					'svg-fill': value => ({
						'& *': {
							fill: value,
						},
					}),
				},
				{
					values: theme('colors'),
					type: ['color'],
				},
			);
		}),
		// Example: svg-stroke-[#000]
		plugin(function ({ matchComponents, theme }) {
			matchComponents(
				{
					'svg-stroke': value => ({
						'& *': {
							stroke: value,
						},
					}),
				},
				{
					values: theme('colors'),
					type: ['color'],
				},
			);
		}),
		// Example: clamp-text-[1rem-2vw-5rem]
		plugin(({ matchUtilities, theme }) => {
			matchUtilities({
				'clamp-text': value => {
					const sizes = theme('fontSize');

					if (sizes) {
						const split = value.split('-').map(v => (sizes[v] ? sizes[v] : v));

						return {
							fontSize: `clamp(${split[0]}, ${split[1]}, ${split[2]})`,
						};
					}

					return null;
				},
			});
		}),

		plugin(function ({ matchUtilities, theme }) {
			const spacing = theme('spacing');

			const properties = {
				'clamp-m': 'margin',
				'clamp-p': 'padding',
				'clamp-w': 'width',
				'clamp-h': 'height',
			};

			if (spacing && properties) {
				Object.entries(properties).forEach(([prefix, property]) => {
					matchUtilities({
						[prefix]: value => {
							const split = value.split('-');

							const clampedValues = split.map(v => spacing[v] || v);

							if (clampedValues.length === 3) {
								return {
									[property]: `clamp(${clampedValues[0]}, ${clampedValues[1]}, ${clampedValues[2]})`,
								};
							}

							return null;
						},
					});
				});
			}

			return null;
		}),
	],
};
