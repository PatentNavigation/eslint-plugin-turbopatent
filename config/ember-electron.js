module.exports = {
  extends: require.resolve('./ember.js'),
  env: {
    'node': true
  },
  globals: {
    'requireNode': true
  },
  plugins: [
    'no-only-tests'
  ],
  rules: {
    "no-only-tests/no-only-tests": 2
  }
};
