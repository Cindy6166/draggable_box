module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'standard',
    'plugin:vue/vue3-recommended',
  	'eslint:recommended',
  	'plugin:prettier/recommended'
  ],
  // parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 0,
    'vue/multi-word-component-names': 0,
  }
}
