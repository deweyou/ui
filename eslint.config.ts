import antfu from '@antfu/eslint-config';

export default antfu(
  {
    stylistic: true,
    ignores: [
      '**/dist/**',
      '**/.storybook/**',
      'node_modules',
    ],
  },
  {
    rules: {
      'style/semi': ['error', 'always'],
    },
  },
);
