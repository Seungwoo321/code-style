import { TSESLint } from '@typescript-eslint/utils'
import baseConfig from './base.js'
import importConfig from './import.js'
import nodeConfig from './node.js'
import promiseConfig from './promise.js'

const configArray: TSESLint.FlatConfig.ConfigArray = [
  baseConfig,
  importConfig,
  nodeConfig,
  promiseConfig
]

export default configArray
