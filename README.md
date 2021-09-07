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

### 配置 github actions 部署服务器

之前的前端构建部署工作都集成在 jenkins 中，配置相对来说比较复杂。
`github actions` 也可以用来做同样的工作，它的优点在于，结构和语法比较清晰，最主要市场上有一些完善的 actions 包，可以快速帮助我们做一些 CI/CD 集成。

关于 github actions 的入门教程可以看[Github Actions](https:#www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

```yml
# usage
name: Build and Deploy # action的名称，任意取
on: # 触发此action的时机，可以看出在往master分支推送的时候会触发
  push:
    branches:
      - master
jobs: # 此次action包含哪些工作
  build-and-deploy: # 工作名
    runs-on: ubuntu-latest # 字段指定运行所需要的虚拟机环境
    steps: # 工作步骤
      - name: Checkout 🛎️ # 步骤1
        uses: actions/checkout@v2.3.1 # 使用市场上的action，这里是用来获取最新的代码

      - name: Use Node.js 12 # 步骤2
        uses: actions/setup-node@v2 # 同上，设置node版本环境等，还可以设置源
        with:
          node-version: '12' # 设置node版本

      - name: Install and Build 🔧 # 步骤3
        run: |
          npm install # 执行脚本安装依赖
          npm run build # 执行脚本编译

      - name: Deploy file 🚀 # 步骤4
        uses: wlixcc/SFTP-Deploy-Action@v1.0 # 同上，使用该action部署代码到自己的服务器
        with: # with这个字段一般是指该action支持的配置项
          username: 'root'
          server: '123.56.119.218'
          ssh_private_key: ${{ secrets.SSH_PRIVATE_KEY }} # 形似${{ secrets.xxx }}这种配置，都是需要在我们的github项目 setting下面配置
          local_path: './dist/*'
          remote_path: '/home/www'
          args: '-o ConnectTimeout=5'
```
