# @seungwoo321/prettier-config

스탠다드 기반으로 개인 스타일에 맞게 prettier 설정을 커스텀하여 제공합니다.

## 설치 방법

```bash
npm install @seungwoo321/prettier-config -D
```

## 사용 방법

.prettierrc.js 파일을 생성하고 `@seungwoo321/prettier-config` 패키지를 추가합니다.

```js
import prettierConfig from '@seungwoo321/prettier-config'

/**
 * @type {import("prettier").Config}
 */
const config = {
  ...prettierConfig
}

export default config
```

또는

package.json 파일에 키를 추가합니다.

```json
"prettier": "@seungwoo321/prettier-config"
```

## Integrating with IDE

- 이 패키지는 Formatting을 위해 Prettier를 사용합니다.
- Code-quality를 위해 ESLint (`@seungwoo321/eslint-plugin-standard-lite-*`) 패키지와 함께 사용합니다. 
- IDE에서 autofix 하기 위해 아래 설정이 필요합니다.

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "prettier.singleAttributePerLine": true
}
```
