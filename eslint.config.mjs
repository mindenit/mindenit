import prettier from 'eslint-config-prettier'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.{js,ts,vue}'],
  ignores: [
    'dist',
    '.nuxt',
    'node_modules',
    '.output',
    '.git',
    'build',
    'LICENSE',
    '*.md',
    'public',
    'pnpm-lock.yaml',
  ],
  ...prettier,
})
