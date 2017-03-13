module.exports = {
  extends: require.resolve('./base.js'),
  env: {
    'browser': true
  },
  rules: {
    'new-cap': [ 'error', { 'capIsNewExceptions': [ 'A' ] } ]
  }
};
