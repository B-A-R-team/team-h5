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
        publicPath: '/team-h5',
      };
      return webpackConfig;
    },
  },
};
