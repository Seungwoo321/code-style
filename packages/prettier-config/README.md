# @seungwoo321/prettier-config

Standard 스타일을 기반으로, 개인 취향에 맞게 커스터마이징한 Prettier 설정입니다.

## 설치

```bash
npm install @seungwoo321/prettier-config -D
```

## 사용법

.prettierrc.js 파일을 생성하고 아래와 같이 설정합니다:

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

또는, package.json에 직접 추가할 수도 있습니다:

```json
"prettier": "@seungwoo321/prettier-config"
```

## IDE 연동 (VSCode)

Prettier를 자동 포맷터로 사용하려면 아래와 같이 설정하세요:

.vscode/settings.json:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "prettier.singleAttributePerLine": true
}
```

💡 코드 품질 유지를 위해 @seungwoo321/eslint-plugin-standard-lite-* 와 함께 사용하는 것을 권장합니다.
