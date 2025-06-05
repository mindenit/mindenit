import tailwindcss from '@tailwindcss/vite'
import { defineOrganization } from 'nuxt-schema-org/schema'

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
		'@vueuse/nuxt',
		'@nuxtjs/seo',
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
	site: {
		url: 'https://mindenit.org',
		name: 'Mindenit - Інноваційні Програмні Рішення',
		description:
			'Mindenit спеціалізується на розробці передових веб- та мобільних додатків. Відкрийте для себе наші проекти, знання та команду експертів.',
		defaultLocale: 'uk',
		trailingSlash: false,
		indexable: true,
		debug: process.env.NODE_ENV === 'development',
	},
	schemaOrg: {
		identity: defineOrganization({
			name: 'Mindenit',
			url: 'https://mindenit.org',
			logo: '/mindenit.png',
			sameAs: ['https://github.com/mindenit', 'https://www.linkedin.com/company/mindenit/'],
		}),
	},
	robots: {
		sitemap: '/sitemap.xml',
	},
	seo: {
		redirectToCanonicalSiteUrl: true,
		fallbackTitle: true,
		automaticDefaults: true,
		metaDataFiles: true,
		meta: {
			ogType: 'website',
			twitterCard: 'summary_large_image',
			ogLocale: 'uk_UA',
		},
	},
})
