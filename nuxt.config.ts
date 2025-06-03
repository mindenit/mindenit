import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	extends: ['./core', './layers/site'],
	imports: {
		dirs: [
			'./core/types',
			'./core/constants',
			'./layers/**/types',
			'./layers/**/schemas',
			'./layers/**/queries',
		],
	},
	future: {
		compatibilityVersion: 4,
	},
	vite: {
		plugins: [tailwindcss()],
	},

	modules: [
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxt/image',
		'@nuxtjs/color-mode',
		'shadcn-nuxt',
	],
	icon: {
		provider: 'iconify',
		serverBundle: {
			collections: ['lucide'],
		},
	},
	colorMode: {
		preference: 'system',
		fallback: 'light',
		classSuffix: '',
		storageKey: 'nuxt-color-mode',
	},
	shadcn: {
		prefix: '',
		componentDir: './core/components/ui',
	},
	css: ['~/core/assets/css/main.css'],
})
