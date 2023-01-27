# babel-plugin-template-css-minifier <a href="https://github.com/nsaunders/babel-plugin-template-css-minifier/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/nsaunders/babel-plugin-template-css-minifier/ci.yml?branch=master" alt="Build status"></a> <a href="https://www.npmjs.com/package/babel-plugin-template-css-minifier"><img src="https://img.shields.io/npm/v/babel-plugin-template-css-minifier.svg" alt="Latest Release"></a> <a href="https://github.com/nsaunders/babel-plugin-template-css-minifier/blob/master/LICENSE"><img src="https://img.shields.io/github/license/nsaunders/babel-plugin-template-css-minifier.svg" alt="License"></a>

**Input**
```javascript
const css = /*css*/`
  body {
    height: 100%;
  }
`;
```
**Output**
```javascript
const css = /*css*/`body{height: 100%;}`;
```