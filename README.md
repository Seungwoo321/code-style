# @seungwoo321/code-style

이 레포지토리는 일관된 코드 스타일 유지를 위해 만들어졌습니다.
[@naverpay/code-style](https://github.com/NaverPayDev/code-style/)에서 영감을 받았으며, 해당 레포처럼 모노레포 구조로 여러 패키지를 포함하고 있습니다.

## Stylistic 기반 포맷터 + Standard 규칙 세트

@stylistic/eslint-plugin을 사용해서 한번에 포맷팅과 린팅을 수행합니다.

### 포함된 패키지

- [@seungwoo321/eslint-plugin-standard-js](/packages/eslint-plugin-standard-js/): ESLint 9.x용 Standard 규칙 패키지입니다.
- [@seungwoo321/eslint-plugin-standard-ts](/packages/eslint-plugin-standard-ts/): ESLint 9.x용 Standard TS 규칙 패키지입니다.
- [@seungwoo321/eslint-plugin-standard-jsx](/packages/eslint-plugin-standard-jsx/): ESLint 9.x용 Standard JSX 규칙 패키지입니다.

### IDE 연동 (VSCode)

.vscode/settings.json

```json
{
  "editor.defaultFormatter": null,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.run": "onType",
  "eslint.format.enable": true,
  "eslint.lintTask.enable": true,
  "eslint.useESLintClass": true,
  "eslint.options": {
    "overrideConfigFile": "eslint.config.js"
  },
  "eslint.probe": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "[javascriptreact]": {
    "editor.defaultFormatter": null
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": null
  },
  "editor.formatOnPaste": false,
  "prettier.singleAttributePerLine": true,
  "typescript.tsdk": "./node_modules/typescript/lib",
  "typescript.tsserver.enableTracing": true,
  "typescript.tsserver.experimental.enableProjectDiagnostics": false,
  "files.associations": {
    "*.json": "jsonc"
  },
  "reactSnippets.settings.importReactOnTop": false,
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "typescript.format.insertSpaceBeforeFunctionParenthesis": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript", 
    "typescriptreact"
  ],
  "eslint.useFlatConfig": true
}
```

.vscode/extensions.json

```json
{
  "recommendations": [
    "dsznajder.es7-react-js-snippets",
    "dbaeumer.vscode-eslint"
  ]
}

```

## Prettier 기반 포맷터 + Standard Lite 규칙 세트

Prettier를 메인 포맷터로 사용하며,  
@stylistic/eslint-plugin 기반의 스타일 규칙은 제외하고 ESLint의 기능적 규칙만 적용한 구성입니다.

### 포함된 패키지

- [@seungwoo321/eslint-plugin-standard-lite-js](/packages/eslint-plugin-standard-lite-js/): 코드 스타일 관련 룰을 제외한 ESLint 9.x용 Standard 규칙 패키지입니다.
- [@seungwoo321/eslint-plugin-standard-lite-jsx](/packages/eslint-plugin-standard-lite-jsx/): 코드 스타일 관련 룰을 제외한 ESLint 9.x용 Standard JSX 규칙 패키지입니다.
- [@seungwoo321/eslint-plugin-standard-lite-ts](/packages/eslint-plugin-standard-lite-ts/): 코드 스타일 관련 룰을 제외한 ESLint 9.x용 Standard TS 규칙 패키지입니다.
- [@seungwoo321/eslint-plugin-prettier](/packages/eslint-plugin-prettier/): Prettier 기반 포맷팅을 제공합니다.


### IDE 연동 (VSCode)

.vscode/settings.json

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "prettier.requireConfig": true,
  "prettier.configPath": ".prettierrc.json",
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.singleAttributePerLine": true
}
```


<!-- 
## 템플릿

코드 스타일을 적용한 개발 템플릿을 별도 레포지토리로 제공합니다 (추후 링크 추가 예정)
- Vite 템플릿
- Vite + React 19 + ESLint 9 + Standard rule
- Vite + Vue2 + ESLint 9 + Standard rule
- Vite + Vue3 + ESLint 9 + Standard rule
- Next 템플릿
- Next 15 + ESLint 9 + Standard rule
- Next 15 + Tailwind 4 + Shadcn/UI + ESLint 9 + Standard rule
- Turborepo 템플릿
-->
