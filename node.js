module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: './'
  },
  plugins: [
    '@typescript-eslint',
    'unused-imports',
    'eslint-plugin-import-helpers',
    'import'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': [
          '**/*.spec.ts',
          '**/*.spec.js',
          './jest.config.ts',
          './jest.config.js'
        ]
      }
    ],
    'no-use-before-define': 'off',
    'no-nested-ternary': 'off',
    'import/prefer-default-export': 'off',
    'camelcase': 'off',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/camelcase': 'off',
    'no-useless-constructor': 'off',
    'import/no-duplicates': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'argsIgnorePattern': '_'
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'ts': 'never'
      }
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        'newlinesBetween': 'always',
        'groups': [
          'module',
          '/^@config/',
          '/^@shared/',
          '/^@modules/',
          [
            'parent',
            'sibling'
          ],
          'index'
        ],
        'alphabetize': {
          'order': 'asc',
          'ignoreCase': true
        }
      }
    ],
    'import/no-unresolved': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'interface',
        'format': [
          'PascalCase'
        ],
        'custom': {
          'regex': '^I[A-Z]',
          'match': true
        }
      }
    ],
    'no-shadow': 'off',
    'no-console': 'warn',
    'no-empty-function': 'off',
    'lines-between-class-members': 'off'
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      'typescript': {}
    }
  },
}