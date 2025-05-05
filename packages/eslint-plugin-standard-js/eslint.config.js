import { defineConfig } from 'eslint/config'
import standard from './lib/index.js'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    ignores: ['lib/**/*'],
    extends: [
      ...tseslint.configs.strict,
      ...tseslint.configs.stylistic,
      ...standard.configs.recommended
    ],
    // config for custom rule test
    rules: {
      '@stylistic/max-len': ['error', {
        code: 120,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }]
    }
  }
])
