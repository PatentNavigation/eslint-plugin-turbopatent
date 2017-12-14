module.exports = {
  extends: require.resolve('./base.js'),
  env: {
    'node': true
  },
  plugins: [
    'no-only-tests'
  ],
  rules: {
    "no-only-tests/no-only-tests": 2
  }
};
