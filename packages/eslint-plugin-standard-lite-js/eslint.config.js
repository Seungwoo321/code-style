import standard from './lib/index.js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    ignores: ['lib/**/*'],
    extends: [...tseslint.configs.recommended, ...standard.configs.recommended]
  }
])
