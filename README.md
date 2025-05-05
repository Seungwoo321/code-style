# @seungwoo321/code-style

이 레포지토리는 일관된 코드 스타일 유지를 위해 만들어졌습니다.
[@naverpay/code-style](https://github.com/NaverPayDev/code-style/)에서 영감을 받았으며, 해당 레포처럼 모노레포 구조로 여러 패키지를 포함하고 있습니다.

## 패키지

eslint 플러그인은 `base`, `stylistic`와 두개를 모두 포함하는 `recommended`를 제공합니다

> ✅ recommended: 코드 품질 규칙과 @stylistic/eslint-plugin 기반 포맷팅 규칙 모두 포함  
> ✅ base: 코드 품질 규칙만 포함 (Prettier와 함께 사용 시 적합)  
> ✅ stylistic: @stylistic/eslint-plugin 기반 포맷팅 규칙만 포함

- [@seungwoo321/eslint-plugin-standard-js](/packages/eslint-plugin-standard-js/): ESLint 9.x용 Standard JS 규칙을 제공합니다.
- [@seungwoo321/eslint-plugin-standard-jsx](/packages/eslint-plugin-standard-jsx/): ESLint 9.x용 Standard JSX 규칙을 제공합니다.
- [@seungwoo321/prettier-config](/packages/prettier-config/): prettier 포맷터를 제공합니다.

## 타입스크립트와 함께 사용하기

> ✅ TypeScript ESLint는 [공식 문서](https://typescript-eslint.io/users/configs)를 참고하세요.

### 설치

```bash
npm install -D eslint @seungwoo321/eslint-plugin-standard-js @seungwoo321/eslint-plugin-standard-jsx typescript-eslint
```

### 사용법

```js
// eslint.config.js
import { defineConfig } from 'eslint/config'
import standardjs from '@seungwoo321/eslint-plugin-standard-js'
import standardjsx from '@seungwoo321/eslint-plugin-standard-jsx'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    extends: [
      ...tseslint.configs.strict,
      ...tseslint.configs.stylistic,
      ...standardjs.configs.recommended,
      ...standardjsx.configs.recommended
    ]
  }
])
```

## 사용 예시

코드 스타일을 적용한 개발 템플릿을 별도 레포지토리로 제공합니다.

- [vite-react-ts-standard](https://github.com/Seungwoo321/vite-react-ts-standard): Vite의 react-ts 템플릿 기반으로 Standard 코드 스타일 플러그인(@seungwoo321/code-style)을 적용한 템플릿입니다.

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
