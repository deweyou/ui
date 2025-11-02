export default {
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss'],
  ignoreFiles: ['**/dist/**'],
  rules: {
    'no-empty-source': null,
    'no-descending-specificity': null,
    'selector-class-pattern': null,
  },
};
