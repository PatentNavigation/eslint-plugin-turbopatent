module.exports = {
  plugins: [ 'node' ],
  extends: [
    'plugin:node/recommended',
    require.resolve('./base.js')
  ],
  env: {
    'node': true
  }
};
