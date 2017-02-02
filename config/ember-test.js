module.exports = {
  extends: require.resolve('./ember.js'),
  env: {
    'embertest': true
  },
  globals: {
    'server': true
  },
  rules: {
    'new-cap': [ 'error', { capIsNewExceptions: [ 'A', '$.Event' ] } ]
  }
};
