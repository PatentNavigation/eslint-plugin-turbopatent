module.exports = {
  plugins: [
    'ember'
  ],
  extends: [
    'plugin:ember/recommended',
    require.resolve('./base.js')
  ],
  rules: {
    'ember/no-empty-attrs': 'error'
  },
  overrides: [
    {
      files: [ 'testem.js' ],
      rules: {
        'camelcase': 'off'
      }
    }
  ]
};
