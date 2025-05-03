import * as pluginImport from 'eslint-plugin-import'
import { TSESLint } from '@typescript-eslint/utils'
const config: TSESLint.FlatConfig.Config = {
  plugins: {
    import: pluginImport
  },
  rules: {
    'import/export': 'error',
    'import/first': 'error',
    'import/no-absolute-path': [
      'error',
      {
        esmodule: true,
        commonjs: true,
        amd: false
      }
    ],
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-webpack-loader-syntax': 'error'
  }
}

export default config
