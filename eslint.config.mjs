import withNuxt from './.nuxt/eslint.config.mjs'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default withNuxt([
	{
		files: ['**/*.js', '**/*.ts', '**/*.vue'],
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			'prettier/prettier': 'error',
			'vue/multi-word-component-names': 'off',
			'vue/require-default-prop': 'off',
		},
	},
	{
		ignores: ['**/*.md', 'pnpm-lock.yaml', '.env', '.env.*', '.nuxt', 'dist', 'node_modules'],
	},
	prettierConfig,
])
