import type { TSESLint } from '@typescript-eslint/utils'
import configs from './configs/index.js'
import meta from './mets.js'

const plugin: TSESLint.FlatConfig.Plugin = {
  meta,
  configs: {
    recommended: [...configs]
  }
}

export default plugin;;;;
