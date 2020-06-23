module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    // 'prettier',
    // 'prettier/vue',
    // 'plugin:prettier/recommended'
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'space-before-function-paren': ['error', 'never'],
    'nuxt/no-cjs-in-config': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always'
        }
      }
    ],
    'linebreak-style': 0,
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: false,
        ignoreWhenEmpty: false,
        ignores: ['pre', 'textarea']
      }
    ]
  },
  overrides: [
    {
<<<<<<< HEAD
      files: ['-test.js', '.spec.js'],
=======
      files: ['*-test.js', '*.spec.js'],
>>>>>>> main
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ]
}