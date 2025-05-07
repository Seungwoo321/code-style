declare module 'eslint-plugin-promise' {
  import { Linter } from 'eslint'

  export const rules: Record<string, Linter.RuleModule>

  export const configs: {
    recommended: Linter.Config;
    'flat/recommended': Linter.FlatConfig;
  }
}
