// !如果 extends 配置的是一个数组，那么最终会将所有规则项进行合并，出现冲突的时候，后面的会覆盖前面的;
// !通过 rules 单独配置的规则优先级比 extends 高;
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  // todo:了解parser 以及 parserOptions的作用
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint', // 仅当用了 Flow 或 尚在实验中的特性等不被 Eslint 支持的，可以增加 `babel-eslint`
    sourceType: 'module'
  },
  extends: [
    // ! eslint官方推荐的规则
    'eslint:recommended',
    // ! eslint-plugin-vue vue 官方eslint插件，针对一些vue提出建议 部分可以修复
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-var': 2,
    'no-unused-vars': 0,
    eqeqeq: process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    // ! 可以这样配置eslint-plugin-vue里面的规则
    'vue/no-unused-components': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/require-default-prop': 0,
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 10,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  }
}
