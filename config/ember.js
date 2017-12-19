module.exports = {
  extends: [
    'plugin:ember/recommended',
    require.resolve('./base.js')
  ],
  env: {
    'browser': true
  },
  rules: {
    'new-cap': [ 'error', { 'capIsNewExceptions': [ 'A' ] } ],
    'no-console': [ 'error', { 'allow': [ 'warn', 'error' ] } ],

    // Custom rules
    'ember/no-empty-attrs': 'error'
  }
};
