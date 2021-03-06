// .eslintrc.js
// extends 这一句很关键 plugin:prettier/recommended 在某些项目低版本下可能需要这个
module.exports = {
  extends: [
    "alloy",
    "alloy/react",
    "alloy/typescript",
    "plugin:prettier/recommended",
  ],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
  },
};
