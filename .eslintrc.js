module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    extends: 'eslint:recommended',
    env: {
        es6: true,
        node: true,
        browser: true
    },
    rules: {
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': ['error', { before: true, after: true }],
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'comma-spacing': ['error', { before: false, after: true }],
        'comma-style': ['error', 'last'],
        curly: ['error', 'multi-line'],
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-tabs': 'error',
        'semi-spacing': ['error', { before: false, after: true }],
        strict: 'error'
    }
};
