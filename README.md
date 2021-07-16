# husky-commitlint

> vue create 项目名称

- vue2
- eslint+prettier
- install eslint-config-prettier
- copy content in .prettier.js
- copy content in .eslintrc.js
- copy content in .eslintignore

> 安装 commitlint

```javascript
1. npm install --save-dev @commitlint/config-conventional  @commitlint/cli
2. 创建.commitlint.js文件写入以下内容
3. module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

> 安装最新版本 lint-staged（先 uninstall 脚手架生成的），以及 husky

```javascript
npm i husky -D
npm install husky --save-dev
给package.json添加如下脚本
"prepare": "husky install"
```
