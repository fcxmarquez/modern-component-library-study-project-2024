// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: [
      './tsconfig.json',
      './tsconfig.node.json',
      './tsconfig.eslint.json',
    ],
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'plugin:security/recommended',
    'plugin:storybook/recommended',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 1,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'import/prefer-default-export': 'off',
    'sonarjs/no-duplicate-string': 'off',
    '@typescript-eslint/no-unused-vars': 2,
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: resolve(__dirname, './tsconfig.json'),
      },
    },
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: [
        '**/*.ts',
        '**/*.tsx',
        '**/*.js',
        '**/*.jsx',
        '**/*.cjs',
        '**/*.mjs',
      ],
      excludedFiles: ['node_modules/**'],
    },
  ],
};
