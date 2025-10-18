/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard"],
  ignoreFiles: ["!**/*.css"],
  rules: {
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["global"]
      }
    ]
  }
};