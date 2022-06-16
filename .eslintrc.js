const prettierrc = require('rc')('./prettier')

module.exports = {
  extends: ['react-app'],
  plugins: ['prettier'],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto',
      }
    ]
  }
}
