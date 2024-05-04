/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'false',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				darkSeaGreen: '#9FC088',
				goldCrayola: '#E8C07D',
				copperRed: '#CC704B',
				darkBrown: '#614124',
				lemonChiffon: '#FCF9C6',
				carla: '#F9FCC6',
				shalimar: '#FEF6AD'
			}
		}
	},
	plugins: []
};
