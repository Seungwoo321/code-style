declare module 'eslint-plugin-promise' {
  import { Linter } from 'eslint'

  export const rules: {
    [key: string]: Linter.RuleModule;
  }

  export const configs: {
    recommended: Linter.Config;
    'flat/recommended': Linter.FlatConfig;
  }
}
