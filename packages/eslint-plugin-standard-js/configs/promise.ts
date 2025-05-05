import promise from 'eslint-plugin-promise'
import { TSESLint } from '@typescript-eslint/utils'
const config: TSESLint.FlatConfig.Config = {
  plugins: {
    promise
  },
  rules: {
    'promise/param-names': 'error'
  }
}

export default config
