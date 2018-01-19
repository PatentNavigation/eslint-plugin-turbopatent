module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    'node': true
  },
  extends: [
    'eslint:recommended',
    './config/node.js'
  ]
};
