module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended',
  'plugin:prettier/recommended'],
  rules: {
    eqeqeq: ['error', 'always'],
    radix: 'off',
    'arrow-parens': 0,
    'function-paren-newline': 0,
    'no-console': 0,
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'global-require': 1,
    'import/no-dynamic-require': 0,
    'space-before-function-paren': [
      'error',
      { anonymous: 'never', named: 'never', asyncArrow: 'always' },
    ],
    'object-curly-spacing': 0,
    camelcase: 'error',
    'no-param-reassign': 'off',
    'operator-linebreak': 'off',
    'max-len': [
      'error',
      120,
      {
        code: 120,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
  },
};



