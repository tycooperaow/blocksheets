module.exports = {
  /* eslint-disable */
  root: true,
  env: {
    node: true
  },
  rules: {
    'no-console': 'off',
    "parser": 0
  },

  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": 6,//was 7
    "sourceType": "module"
  },
  plugins: [
    '@vue'
  ]
}
