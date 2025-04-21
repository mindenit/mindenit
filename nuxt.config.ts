import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	modules: [
		"@nuxt/eslint",
		"@nuxt/fonts",
		"@nuxt/icon",
		"@nuxtjs/color-mode",
		"@vueuse/nuxt",
		"@nuxtjs/seo",
		"nuxt-directus",
	],
	imports: {
		dirs: ["./types"],
	},
	future: {
		compatibilityVersion: 4,
	},
	runtimeConfig: {
		public: {
			server: {
				api_url: process.env.NUXT_PUBLIC_SERVER_API_URL,
				api_key: process.env.NUXT_PUBLIC_SERVER_API_KEY,
			},
		},
	},
	nitro: {
		minify: true,
		compressPublicAssets: {
			brotli: true,
		},
	},
	css: ["~/assets/css/index.css"],
	vite: {
		plugins: [tailwindcss()],
	},
	icon: {
		provider: "iconify",
		serverBundle: {
			collections: ["lucide"],
		},
	},
	colorMode: {
		preference: "system",
		fallback: "light",
		classSuffix: "",
		storageKey: "nuxt-color-mode",
	},
});
