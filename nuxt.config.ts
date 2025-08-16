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
	runtimeConfig: {
		smtpHost: process.env.SMTP_HOST,
		smtpPort: Number(process.env.SMTP_PORT),
		smtpUser: process.env.SMTP_USER,
		smtpPass: process.env.SMTP_PASS,
		smtpFrom: process.env.SMTP_FROM,
		public: {
			hiringWebhookUrl: process.env.HIRING_WEBHOOK_URL,
		},
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
			description:
				'Mindenit - це компанія, що спеціалізується на створенні інноваційних програмних рішень, включаючи веб- та мобільні додатки. Ми перетворюємо ідеї на реальність, використовуючи передові технології та підходи до розробки.',
			email: 'sales@mindenit.org',
		}),
	},
	robots: {
		sitemap: '/sitemap.xml',
		allow: '/',
	},
	seo: {
		redirectToCanonicalSiteUrl: true,
		fallbackTitle: true,
		automaticDefaults: true,
		metaDataFiles: true,
		meta: [
			{
				name: 'keywords',
				content:
					'веб-розробка, мобільні додатки, програмне забезпечення, Nuxt, Vue, JavaScript, розклад хнуре, хнуре, університет',
			},
			{ property: 'og:type', content: 'website' },
			{ property: 'og:locale', content: 'uk_UA' },
			{ property: 'og:image', content: 'https://mindenit.org/mindenit.png' },
			{ property: 'og:locale:alternate', content: 'en_US' },
			{ name: 'twitter:card', content: 'summary_large_image' },
		],
	},
})
