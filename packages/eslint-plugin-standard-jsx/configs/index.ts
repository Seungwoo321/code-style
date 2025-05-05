import { TSESLint } from '@typescript-eslint/utils'
import baseConfig from './base.js'
import stylisticConfig from './stylistic.js'

const configArray: TSESLint.FlatConfig.ConfigArray = [
  baseConfig,
  stylisticConfig
]

export {
  configArray as default,
  baseConfig,
  stylisticConfig
}
