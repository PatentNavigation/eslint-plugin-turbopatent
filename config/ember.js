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
    'ember/no-empty-attrs': 'error',
    // We actually do not want to turn this rule off. However,
    // the current rule has a bug. This rule does not take into
    // account the new module import syntax. Until this is fixed,
    // this rule should be turned off.
    'ember/no-global-jquery': 'off'
  }
};
