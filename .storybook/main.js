module.exports = {
  typescript: {
    reactDocgen: 'none',
  },
  core: { builder: 'webpack5' },
  addons: [
    'storybook-dark-mode',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    // {
    //   name: '@storybook/preset-scss',
    //   options: {
    //     sassLoaderOptions: {
    //       additionalData: '',
    //     },
    //   },
    // },
    '@storybook/addon-events',
    '@storybook/addon-storysource',
    '@storybook/addon-controls/register',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSstoriesX: true,
      },
    },
  ],
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/stories.@(js|jsx|ts|tsx)',
    '../src/**/*.storybook.@(js|jsx|ts|tsx)',
    '../src/**/storybook.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
};
