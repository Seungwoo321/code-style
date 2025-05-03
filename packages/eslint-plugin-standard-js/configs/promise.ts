import pluginPromise from 'eslint-plugin-promise'
import { TSESLint } from '@typescript-eslint/utils'
const config: TSESLint.FlatConfig.Config = {
  plugins: {
    promise: pluginPromise
  },
  rules: {
    'promise/param-names': 'error'
  }
}

export default config
