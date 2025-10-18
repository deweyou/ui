import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: {
    css: true,
  },
}, {
  files: ['**/*.json'],
  rules: {
    'style/eol-last': 'off',
  },
})
