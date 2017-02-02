module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    'ember-suave',
    'turbopatent'
  ],
  extends: [
    // Ember suave includes a bunch of non-Ember-related rules that we want to
    // use, so we include it here. The Ember-related ones should not have any
    // effect on non-Ember code.
    'plugin:ember-suave/recommended',
    'eslint:recommended'
  ],
  env: {
    'es6': true
  },
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    'camelcase': 'error',
    'comma-dangle': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'curly': 'error',
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'func-call-spacing': 'error',
    'indent': [ 'error', 2 ],
    'keyword-spacing': [ 'error', { 'before': true, 'after': true } ],
    'new-cap': 'error',
    'new-parens': 'error',
    'no-duplicate-imports': 'error',
    'no-global-assign': 'error',
    'no-loop-func': 'error',
    'no-multiple-empty-lines': 'error',
    'no-nested-ternary': 'error',
    'no-restricted-globals': [ 'error', 'event' ],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-tabs': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-vars': [ 'error', { vars: 'all', args: 'none' } ],
    'no-var': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': [ 'error', 'always' ],
    'object-shorthand': 'error',
    'one-var': [ 'error', 'never' ],
    'operator-linebreak': [ 'error', 'after' ],
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'radix': 'error',
    'rest-spread-spacing': 'error',
    'space-before-function-paren': [ 'error', 'never' ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'template-curly-spacing': 'error',
    'ember-suave/no-const-outside-module-scope': 'off',
    'ember-suave/prefer-destructuring': [ 'error', {
      'array': false,
      'object': true
    } ]
  }
};
