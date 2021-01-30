module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output = {
        ...webpackConfig.output,
        publicPath: 'https://cdn.jsdelivr.net/gh/b-a-r-team/team-h5@gh-pages',
      };
      return webpackConfig;
    },
  },
};
