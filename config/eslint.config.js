const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'import', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 120,
        endOfLine: 'auto',
      },
      {
        usePrettierrc: false,
        fileInfoOptions: {
          withNodeModules: true,
        },
      },
    ],
    'react/prop-types': 0,
    'import/no-extraneous-dependencies': 'off',
    'react/destructuring-assignment': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
  ignorePatterns: ['node_modules/*', 'dist/*', '*.scss', '*.snap', '*.json', 'cypress/*'],
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.jsx'],
      env: {
        jest: true,
      },
    },
  ],
  parser: '@babel/eslint-parser',
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, './webpack.config.common.js'),
      },
    },
  },
};
