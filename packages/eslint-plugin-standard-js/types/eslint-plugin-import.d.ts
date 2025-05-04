declare module 'eslint-plugin-import' {
  import { Linter } from 'eslint'
  export const rules: {
    [ruleName: string]: Linter.RuleModule;
  }

  export const configs: {
    recommended: Linter.Config;
    errors: Linter.Config;
    warnings: Linter.Config;
    'stage-0'?: Linter.Config;
    react?: Linter.Config;
    'react-native'?: Linter.Config;
    electron?: Linter.Config;
    typescript?: Linter.Config;
  }

  export const flatConfigs: {
    recommended: Linter.FlatConfig;
    errors: Linter.FlatConfig;
    warnings: Linter.FlatConfig;
    react?: Linter.FlatConfig;
    'react-native'?: Linter.Config;
    electron?: Linter.Config;
    typescript?: Linter.Config;
  }
}
