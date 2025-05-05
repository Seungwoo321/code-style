import { TSESLint } from '@typescript-eslint/utils'
import react from 'eslint-plugin-react'
const config: TSESLint.FlatConfig.Config = {
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: {
    react
  },
  settings: {
    react: {
      version: '17'
    },
    linkComponents: [
      'Link'
    ]
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-boolean-value': 'error',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': ['error', 2, {
      checkAttributes: false,
      indentLogicalExpressions: true
    }],
    'react/jsx-key': ['error', {
      checkFragmentShorthand: true
    }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-string-refs': ['error', {
      noTemplateLiterals: true
    }],
    'react/no-unescaped-entities': ['error', {
      forbid: ['>', '}']
    }],
    'react/no-render-return-value': 'error',
    'react/require-render-return': 'error'
  }
}
export default config
