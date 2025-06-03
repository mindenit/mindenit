// https://nuxt.com/docs/api/configuration/nuxt-config
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

	modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxtjs/color-mode'],
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
})
