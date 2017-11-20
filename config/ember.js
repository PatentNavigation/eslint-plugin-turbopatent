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

    // Custom rules
    'ember/avoid-leaking-state-in-components': 'error',
    'ember/local-modules': 'error',
    'ember/no-empty-attrs': 'error',
    'ember/no-global-jquery': 'off'
  }
};
