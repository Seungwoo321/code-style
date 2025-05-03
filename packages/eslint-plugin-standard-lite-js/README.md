# @seungwoo321/eslint-plugin-standard-lite-js

ESLint 9.x에서 사용할 수 있는 Standard 기반의 경량 린트 플러그인입니다.
지원이 중단된 스타일 관련 규칙은 제거하고, ESLint v9의 Flat Config 방식으로 재구성했습니다.

> ✨ 코드 스타일은 Prettier(@seungwoo321/prettier-config)를 사용하거나,
> stylistic plugin과 통합된 플러그인(@seungwoo321/eslint-plugin-standard-js)을 사용하세요.

## 설치

```bash
npm install -D eslint @seungwoo321/eslint-plugin-standard-lite-js
```

## 사용법

eslint.config.js

```js
import { defineConfig } from 'eslint/config'
import standardlitejslint from '@seungwoo321/eslint-plugin-standard-lite-js'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    ignores: ['lib/**/*'],
    extends: [...tseslint.configs.recommended, ...standardlitejslint.configs.recommended]
  }
])


```

## IDE 연동 (VSCode)

- Prettier(@seungwoo321/prettier-config)와 함께 사용하며, 자동 포맷팅을 위해 아래 설정을 적용하세요:

.vscode/settings.json

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "prettier.singleAttributePerLine": true
}
```
