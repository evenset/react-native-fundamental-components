module.exports = {
    parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2019,  // Allows for the parsing of modern ECMAScript features
        sourceType: 'module',  // Allows for the use of imports
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        es6: true, // Setting ecmaVersion doesn't imply having access to es6
        node: true,
        jest: true,
        browser: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:jest/recommended', // Jest configs
        'plugin:import/errors', // import rules
        'plugin:import/warnings',
        'plugin:import/typescript', // Must be below other plugin:import
        'plugin:react/recommended', // React rules
        'plugin:jsx-a11y/recommended', // Extra JSX rules
        'plugin:react-native/all', // React-native rules
        'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    settings: {
        "react": {
            "version": "detect"
        }
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        '@typescript-eslint/ban-ts-ignore': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-unused-vars': 'off', // Handled by tsc checking
        '@typescript-eslint/interface-name-prefix': 'off',
        'jest/no-commented-out-tests': 'error',
        'react/jsx-no-literals': ['error', { 'noStrings': true }], // Use i18n instead
        'import/no-extraneous-dependencies': 'error',
        'accessor-pairs': 'error',
        'array-bracket-newline': 'error',
        'array-bracket-spacing': 'error',
        'array-callback-return': 'error',
        'arrow-body-style': 'error',
        'arrow-parens': 'error',
        'arrow-spacing': 'error',
        'block-scoped-var': 'error',
        'block-spacing': 'error',
        'brace-style': [
            'error',
            '1tbs'
        ],
        'callback-return': 'error',
        camelcase: 'error',
        'capitalized-comments': 'off',
        'class-methods-use-this': 'off',
        'comma-dangle': [
            'error',
            'always-multiline'
        ],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'consistent-return': 'error',
        'consistent-this': 'error',
        curly: 'error',
        'default-case': 'error',
        'dot-location': [
            'error',
            'property'
        ],
        'dot-notation': 'error',
        'eol-last': 'error',
        eqeqeq: 'error',
        'func-name-matching': 'error',
        'func-names': 'error',
        'generator-star-spacing': 'error',
        'guard-for-in': 'error',
        'handle-callback-err': 'error',
        'id-blacklist': 'error',
        'id-length': 'error',
        'id-match': 'error',
        'implicit-arrow-linebreak': 'error',
        indent: ['error', 4, { "SwitchCase": 1 }],
        'jsx-quotes': [
            'error',
            'prefer-double'
        ],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'linebreak-style': [
            'error',
            'unix'
        ],
        'lines-around-directive': 'error',
        'lines-between-class-members': 'error',
        'max-classes-per-file': 'error',
        'max-depth': 'error',
        'max-len': ['warn', 140],
        'max-nested-callbacks': 'error',
        'max-statements-per-line': 'error',
        'new-cap': 'error',
        'new-parens': 'error',
        'newline-after-var': 'error',
        'newline-before-return': 'error',
        'newline-per-chained-call': 'error',
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        'no-bitwise': 'error',
        'no-buffer-constructor': 'error',
        'no-caller': 'error',
        'no-catch-shadow': 'error',
        'no-continue': 'error',
        'no-div-regex': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': 'error',
        'no-empty-function': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-misleading-character-class': 'error',
        'no-mixed-operators': 'error',
        'no-mixed-requires': 'error',
        'no-multi-assign': 'error',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': 'error',
        'no-native-reassign': 'error',
        'no-negated-condition': 'error',
        'no-negated-in-lhs': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-require': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-path-concat': 'error',
        'no-plusplus': 'error',
        'no-process-env': 'error',
        'no-process-exit': 'error',
        'no-proto': 'error',
        'no-prototype-builtins': 'error',
        'no-restricted-globals': 'error',
        'no-restricted-imports': 'error',
        'no-restricted-modules': 'error',
        'no-restricted-properties': 'error',
        'no-restricted-syntax': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-sync': 'error',
        'no-tabs': 'error',
        'no-template-curly-in-string': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'error',
        'no-underscore-dangle': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': 'error',
        'no-unused-expressions': 'error',
        'no-unused-vars': 'off',
        'no-use-before-define': 'error',
        'no-useless-call': 'error',
        'no-useless-catch': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'no-warning-comments': 'warn',
        'no-whitespace-before-property': 'error',
        'no-with': 'error',
        'nonblock-statement-body-position': 'error',
        'object-curly-newline': 'error',
        'object-curly-spacing': ['error', 'always'],
        'object-shorthand': 'error',
        'one-var-declaration-per-line': 'error',
        'operator-assignment': 'error',
        'operator-linebreak': 'error',
        'padded-blocks': 'off',
        'padding-line-between-statements': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-destructuring': 'error',
        'prefer-numeric-literals': 'error',
        'prefer-object-spread': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': [
            'error',
            'as-needed'
        ],
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        'react-native/sort-styles': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'require-atomic-updates': 'error',
        'require-await': 'error',
        'require-unicode-regexp': 'error',
        'rest-spread-spacing': 'error',
        'semi-spacing': 'error',
        'semi-style': [
            'error',
            'last'
        ],
        'space-before-blocks': 'error',
        'space-before-function-paren': 'off',
        'space-in-parens': [
            'error',
            'never'
        ],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'error',
        strict: 'error',
        'switch-colon-spacing': 'error',
        'symbol-description': 'error',
        'template-curly-spacing': 'error',
        'template-tag-spacing': 'error',
        'unicode-bom': [
            'error',
            'never'
        ],
        'vars-on-top': 'error',
        'wrap-iife': 'error',
        'wrap-regex': 'error',
        'yield-star-spacing': 'error',
        yoda: 'error'
    },
};
