# @seungwoo321/eslint-plugin-standard-js

ESLint 9.x용 Standard 규칙 기반의 린트 플러그인입니다.

## 설치

```bash
npm install -D eslint @seungwoo321/eslint-plugin-standard-js
```

## 사용법

> ✅ `recommended`: 코드 스타일과 린트 규칙을 모두 포함합니다.  
> ✨ `base`: 린트 규칙만 포함합니다. Prettier 규칙을 활용하고 싶은 경우에 적합합니다.  
> ✨ `stylistic`: 코드 스타일 규칙만 포함합니다.    

```js
// eslint.config.js
import { defineConfig } from 'eslint/config'
import standard from '@seungwoo321/eslint-plugin-standard-js'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    extends: [
      ...standard.configs.recommended
    ]
  }
])
```

> ✅ 기본 설정을 사용하면서 특정 규칙만 커스터마이즈할 수 있습니다.  
> ✨ 프로젝트에 맞는 규칙을 세밀하게 조정하고 싶다면 다음 방식이 유용합니다.

```js
// eslint.config.js
import { defineConfig } from 'eslint/config'
import standardjs from '@seungwoo321/eslint-plugin-standard-js'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    ignores: ['lib/**/*'],
    extends: [
      ...standard.configs.standardjs
    ],
    rules: {
      // ✅ 최대 라인 길이 제한
      '@stylistic/max-len': ['error', {
        code: 80,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }],
      // ✅ 세미콜론 규칙 비활성화
      '@stylistic/semi': 'off',
      // ✅ 미사용 변수는 경고로만 표시
      'no-unused-vars': 'warn'
    }
  }
])

```

## IDE 연동 (VSCode, Cursor)

> ✅ stylistic가 포함된 규칙을 사용한다면, 자동 포맷팅을 위해 아래 설정을 적용하세요.
> ✨ prettier를 사용하는 규칙을 사용한다면, 자동 포맷팅을 위해 [@seungwoo321/prettier-config](../prettier-config/)를 참고하세요.  

```jsonc
// .vscode/settings.json
{
  "editor.tabSize": 2,
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
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript", 
    "typescriptreact"
  ],
  "eslint.useFlatConfig": true,
  
  // JavaScript/TypeScript 기본 포맷팅 비활성화 (ESLint가 담당)
  "javascript.format.enable": false,
  "typescript.format.enable": false
}
```

