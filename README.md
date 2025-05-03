# @seungwoo321/code-style

이 레포지토리는 일관된 코드 스타일 유지를 위해 만들어졌습니다.
[@naverpay/code-style](https://github.com/NaverPayDev/code-style/)에서 영감을 받았으며, 해당 레포처럼 모노레포 구조로 여러 패키지를 포함하고 있습니다.

## Stylistic 기반 포맷터와 ESLint 사용하기

Code-quality를 위해 ESLint를 사용하고 Formatting을 위해 @stylistic/eslint-plugin을 사용합니다.

- [@seungwoo321/eslint-plugin-standard-js](/packages/eslint-plugin-standard-js/): ESLint 9.x용 Standard 규칙과 스타일 포맷터
- [@seungwoo321/eslint-plugin-standard-ts](/packages/eslint-plugin-standard-ts/): ESLint 9.x용 Standard TS 규칙과 스타일 포맷터
- [@seungwoo321/eslint-plugin-standard-jsx](/packages/eslint-plugin-standard-jsx/): ESLint 9.x용 Standard JSX 규칙과 스타일 포맷터

## Prettier 기반 포맷터와 ESLint 사용하기

Code-quality를 위해 ESLint를 사용하고 Formatting을 위해 Prettier를 사용합니다.

- [@seungwoo321/eslint-plugin-standard-lite-js](/packages/eslint-plugin-standard-lite-js/): ESLint 9.x용 Standard 규칙
- [@seungwoo321/eslint-plugin-standard-lite-jsx](/packages/eslint-plugin-standard-lite-jsx/): ESLint 9.x용 Standard JSX 규칙
- [@seungwoo321/eslint-plugin-standard-lite-ts](/packages/eslint-plugin-standard-lite-ts/): ESLint 9.x용 Standard TS 규칙
- [@seungwoo321/prettier-config](/packages/prettier-config/): Prettier 포맷터


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
