import type { TSESLint } from '@typescript-eslint/utils'
import configArray, {
  baseConfig,
  stylisticConfig,
  importConfig,
  nodeConfig,
  promiseConfig
} from './configs/index.js'
import meta from './meta.js'

const recommended: TSESLint.FlatConfig.ConfigArray = [...configArray]
const base: TSESLint.FlatConfig.ConfigArray = [baseConfig, importConfig, nodeConfig, promiseConfig]
const stylistic: TSESLint.FlatConfig.ConfigArray = [stylisticConfig]

const plugin: TSESLint.FlatConfig.Plugin = {
  meta,
  configs: {
    recommended,
    base,
    stylistic
  }
}

export default plugin
