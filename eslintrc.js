module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['.eslintrc.js', 'webpack.config.js'],

  extends: [
    'eslint:recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],

  rules: {
    curly: 'error',
    eqeqeq: 'warn',
    'no-debugger': 'warn',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always-and-inside-groups',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    'import/named': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 'warn',
    'import/namespace': 'warn',
    'import/default': 'warn',

    'optimize-regex/optimize-regex': 'warn',
    'prettier/prettier': [
      'warn',
      {
        tabWidth: 2,
        endOfLine: 'auto',
        printWidth: 120,
      },
    ],
    'promise/prefer-await-to-then': 'error',
    'sonarjs/prefer-immediate-return': 0,
    'sonarjs/no-duplicate-string': ['warn', 4],
    'sonarjs/no-small-switch': 0,
  },
};
