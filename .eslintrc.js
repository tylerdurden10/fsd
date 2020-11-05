module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: { 'no-console': 'off' },
  //   ignorePatterns: ['webpack/**/*.js', 'build/**/*.js', 'dist/**/*.js'],
};
