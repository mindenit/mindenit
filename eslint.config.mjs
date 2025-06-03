import withNuxt from './.nuxt/eslint.config.mjs'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default withNuxt([
	{
		// Конфігурація для інтеграції Prettier
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			'prettier/prettier': 'error',
		},
	},
	{
		ignores: ['**/*.md', 'pnpm-lock.yaml', '.env', '.env.*', '.nuxt', 'dist', 'node_modules'],
	},
	prettierConfig,
])
