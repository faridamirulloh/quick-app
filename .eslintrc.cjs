module.exports = {
  root: true,
  env: {
    'amd': true,
    'browser': true,
    'es2020': true,
    'node': true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: [
    'import',
    'prettier',
    'react',
    'react-hooks',
    'react-refresh',
  ],
  rules: {
    // #region react rules.
    'react/jsx-no-bind': [
      'error',
      {
        'allowArrowFunctions': true,
        'allowBind': false,
        'ignoreRefs': true
      }
    ],
    'react/jsx-no-target-blank': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unused-prop-types': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/self-closing-comp': ['error', {
      'component': true,
      'html': true
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'jsx-a11y/no-autofocus': 'off',
    // #endregion

    // #region eslint rules.
    'comma-dangle': [
      'error',
      'always-multiline'
    ],
    'max-len': [
      'error',
      {
        'code': 120,
        'ignoreComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true
      }
    ],
    'no-bitwise': 'off',
    'no-console': 'off',
    'no-param-reassign': [
      'error',
      {
        'props': false
      }
    ],
    'no-underscore-dangle': 'off',
    'no-use-before-define': [
      'error',
      {
        'functions': false,
        'variables': false
      }
    ],
    'operator-linebreak': 'off',
    // #endregion

    // #region eslint-import rules.
    'import/no-absolute-path': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-import-module-exports': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
        'alphabetize': { 'order': 'asc', 'caseInsensitive': true }
      }
    ],
    // #endregion

    // #region eslint-prettier rules.
    'prettier/prettier': [
      'warn',
      {
        'bracketSpacing': false,
        'endOfLine': 'auto',
        'printWidth': 120,
        'semi': true,
        'singleQuote': true,
        'tabWidth': 2
      }
    ],
    // #endregion
  },
}
