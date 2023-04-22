module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin',
    'import',
    'prettier',
    'simple-import-sort',
    'unused-imports',
    'react-hooks',
  ],
  rules: {
    'react/jsx-key': 1,
    '@typescript-eslint/typedef': 2,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/consistent-type-assertions': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      { argsIgnorePattern: '^_|^req|^next', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/lines-between-class-members': [
      2,
      'always',
      { exceptAfterSingleLine: true },
    ],
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-unused-expressions': [2, { allowTernary: true }],
    'react/require-default-props': 0, // FIXME: for ref
    'react/no-unused-prop-types': 0, // FIXME: for ref
    'react/no-unstable-nested-components': 0, // FIXME: for ref
    'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-unsafe-optional-chaining': 1,
    '@typescript-eslint/no-empty-function': [2, { allow: ['constructors'] }],
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-empty-interface': [2, { allowSingleExtends: true }],
    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 0,
    'react/display-name': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'import/no-unresolved': 0,
    'import/no-cycle': 0,
    'import/prefer-default-export': 0,
    'import/no-useless-path-segments': 0,
    'import/no-extraneous-dependencies': 1,
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-restricted-imports': [
      2,
      {
        patterns: ['../../../../*'],
        paths: [
          '.',
          '..',
          './index',
          '../index',
          '../../index',
          '../../../index',
          './',
          '../',
          '../../',
          '../../../',
          '../../../../',
        ],
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'class-methods-use-this': 0,
    'consistent-return': 0,
    'no-underscore-dangle': 0,
    'react/prop-types': 0,
    'global-require': 0,
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          [
            // Packages. `react` related packages come first.
            '^react',
            '^@?\\w',
            // Internal packages.
            '^(@|@models|@core|@store|@components|@pages||@layouts)(/.*|$)',
            // Side effect imports.
            '^\\u0000',
            // Parent imports. Put `..` last.
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            // Other relative imports. Put same-folder imports and `.` last.
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'sort-imports': 0,
    'import/order': 0,
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0 }],
    'no-restricted-syntax': 0,
    'lines-between-class-members': 0,
    'unused-imports/no-unused-imports-ts': 2,
    'no-unused-expressions': 0,
    'no-useless-constructor': 1,
    'padding-line-between-statements': [
      2,
      {
        blankLine: 'always',
        prev: '*',
        next: ['return', 'break'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'if',
      },
      {
        blankLine: 'always',
        prev: 'if',
        next: '*',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: [['@', `${__dirname}/src/app`]],
    },
  },
  ignorePatterns: ['dist/', 'node_modules/', 'bin/', 'build/'],
};
