module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'compat',
  ],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    // Remove warnings on max line length exceeding 100 characters
    'max-len': 'off',
    // Disabled the requirement to default all non-required props
    'react/require-default-props': 'off',
    'compat/compat': 'error',
    // Disable this rule as it has been marked as deprecated in jsx-a11y plugin
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/releases/tag/v6.1.0
    'jsx-a11y/label-has-for': 'off',
    // Replaces jsx-a11y/label-has-for rule. By default, it wants inputs to be both wrapped in a label
    // and include a id/for attribute mapping with label.
    // This config updates the rule to require one or the other.
    'jsx-a11y/label-has-associated-control': [2, { assert: 'either' }],
    'react/destructuring-assignment': 'off',
  },
  overrides: [
    {
      files: ['**/jest/**/*.test.*'],
      globals: {
        mount: true,
        shallow: true,
        render: true,
      },
    },
    {
      files: ['**/wdio/**/*-spec.*'],
      globals: {
        before: true,
        browser: true,
        Terra: true,
      },
    },
  ],
};
