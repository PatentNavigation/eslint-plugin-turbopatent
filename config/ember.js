module.exports = {
  plugins: [
    'ember'
  ],
  extends: [
    'plugin:ember/recommended',
    require.resolve('./base.js')
  ],
  rules: {
    'no-console': [ "error", { allow: [ "warn", "error" ] } ],
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
