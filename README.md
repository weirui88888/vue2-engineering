### 目的

方便后期配置项目+解决各种冲突的问题

### 背景

网上很多关于工程化配置的已经不实用，踩坑无数总结以下。项目基于`vue-cli`脚手架生成`vue2.x`版本项目，选择`eslint`+`prettier`方式。

> vue create 项目名称

- vue2
- eslint+prettier
- install eslint-config-prettier // 解决 eslint-pulgin-prettier 和编辑器 prettier 插件的冲突
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

---

> 安装最新版本 lint-staged（先 uninstall 脚手架生成的），以及 husky

```javascript
npm i husky -D
npm install husky --save-dev
在执行npx husky install
给package.json添加如下脚本,这样下次用户install的时候也会安装husky
"prepare": "husky install"

再执行 npx husky add .husky/pre-commit 'npx lint-staged' 和 npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'
参考package.json中的lint-staged
```

---

> 安装 stylelint 相关包，从而实现提交时自动格式化 css 样式

- stylelint
- stylelint-config-rational-order // 提供 css 正确的顺序，这样就不用自己定义顺序了
- stylelint-config-standard
- stylelint-order

参考 .stylelintrc.js 和.stylelintignore 配置

---

vscode 编辑器中关于 eslint && stylelint 的配置也可以设置再项目的.vscode 的 setting.json 中

```javascript
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true, // 保存时格式化eslint
  "source.fixAll.stylelint": false // 保存时自动stylelint格式化样式
}
```

---

---

### 项目使用 commitizen 生成提交记录

- 本地全局需要安装 commitizen 命令
- 在项目目录里，运行下面的命令，使其支持 Angular 的 Commit message 格式

```javascript
// 使用npm包cz-conventional-changelog进行初始化
commitizen init cz-conventional-changelog --save --save-exact
```

- 以后 commit 的时候直接 git cz 就可以了,其中如果时破坏性的改动需要再 breaking changes 步骤做说明

### 给 commit 添加提交信息表情，方便知道当前提交的作为

- 本地配置快捷 alias 方便后面获取 emoji 表情书写格式
- git commit --amend 修改上一次的 message
