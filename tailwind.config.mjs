/** @type {import('tailwindcss').Config} */
export default {
	content						: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme						: {
		extend					: {
			colors				: {
				"black-base" 	: "#222222",
				"gray-base" 	: "#B6B6B6"
			}
		},
	},
	plugins						: [],
}
