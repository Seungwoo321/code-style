import { TSESLint } from '@typescript-eslint/utils'
import stylisticJsx from '@stylistic/eslint-plugin-jsx'
const config: TSESLint.FlatConfig.Config = {
  plugins: {
    '@stylistic/jsx': stylisticJsx
  },
  rules: {
    '@stylistic/jsx/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    '@stylistic/jsx/jsx-closing-tag-location': 'error',
    '@stylistic/jsx/jsx-curly-brace-presence': ['error', {
      props: 'never',
      children: 'never'
    }],
    '@stylistic/jsx/jsx-curly-newline': ['error', {
      multiline: 'consistent',
      singleline: 'consistent'
    }],
    '@stylistic/jsx/jsx-curly-spacing': ['error', {
      attributes: { when: 'never', allowMultiline: true },
      children: { when: 'never', allowMultiline: true }
    }],
    '@stylistic/jsx/jsx-equals-spacing': ['error', 'never'],
    '@stylistic/jsx/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    '@stylistic/jsx/jsx-indent-props': ['error', 2],
    '@stylistic/jsx/jsx-pascal-case': ['error', { allowAllCaps: false }],
    '@stylistic/jsx/jsx-props-no-multi-spaces': 'error',
    '@stylistic/jsx/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never'
    }],
    '@stylistic/jsx/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'ignore',
      condition: 'ignore',
      logical: 'ignore',
      prop: 'ignore'
    }],
    '@stylistic/jsx/jsx-self-closing-comp': 'error'
  }
}

export default config
