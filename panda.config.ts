import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: false, // should be set to true before polishing the UI

	// Where to look for your css declarations
	include: [
		"./src/**/*.{ts,tsx,js,jsx,astro}",
		"./pages/**/*.{ts,tsx,js,jsx,astro}",
	],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {},
	},

	// The output directory for your css system
	outdir: "styled-system",
});
