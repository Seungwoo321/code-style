import { defineConfig } from 'eslint/config'
import standard from '@seungwoo321/eslint-plugin-standard-js'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    ignores: ['lib/**/*'],
    extends: [
      ...tseslint.configs.strict,
      ...tseslint.configs.stylistic,
      ...standard.configs.recommended
    ]
  }
])
