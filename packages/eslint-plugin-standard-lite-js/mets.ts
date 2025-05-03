import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { TSESLint } from '@typescript-eslint/utils'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const packageJsonPath = path.resolve(__dirname, '../package.json')
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

const meta: TSESLint.FlatConfig.PluginMeta = {
  name: pkg.name,
  version: pkg.version
}

export default meta
