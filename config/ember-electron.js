module.exports = {
  extends: require.resolve('./ember.js'),
  env: {
    'node': true
  },
  globals: {
    'requireNode': true
  },
  overrides: [
    {
      files: [ 'ember-electron/**/*.js' ],
      env: {
        browser: false
      }
    },
    {
      files: [ 'ember-electron-tests/**/*.js' ],
      env: {
        browser: false,
        mocha: true
      }
    },
    {
      files: [ 'testem-electron.js' ],
      rules: {
        'camelcase': 'off'
      }
    }
  ]
};
