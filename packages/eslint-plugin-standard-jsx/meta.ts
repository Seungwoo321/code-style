import { TSESLint } from '@typescript-eslint/utils'
import pkg from './package.json' with { type: 'json' }

const meta: TSESLint.FlatConfig.PluginMeta = {
  name: pkg.name,
  version: pkg.version
}

export default meta
