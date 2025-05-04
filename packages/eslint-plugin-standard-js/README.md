# @seungwoo321/eslint-plugin-standard

ESLint 9.x용 Standard 규칙 기반의 린트 플러그인입니다.
@stylistic/eslint-plugin을 통합하여 스타일 규칙까지 포함된 완전한 구성입니다.

> ✅ 코드 스타일과 린트 규칙을 모두 포함합니다.
> Prettier와 별도로 stylistic 규칙을 활용하고 싶은 경우에 적합합니다.

## 설치

```bash
npm install -D eslint @seungwoo321/eslint-plugin-standard
```

## 사용법

eslint.config.js:

```js
import { defineConfig } from 'eslint/config'
import standardjs from '@seungwoo321/eslint-plugin-standard'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    extends: [
      ...tseslint.configs.recommended,
      ...standard.configs.recommended
    ]
  }
])

```