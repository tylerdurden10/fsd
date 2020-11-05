module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-useless-path-segments': 'off',
    'implicit-arrow-linebreak': 'off',
    'comma-dangle': 'off',
    'arrow-parens': 'off',
    'import/prefer-default-export': 'off',
  },
  ignorePatterns: ['webpack/**/*.js', 'build/**/*.js', 'dist/**/*.js'],
};
