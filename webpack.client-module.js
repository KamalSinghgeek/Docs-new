const { ProvidePlugin } = require('webpack');

module.exports = () => ({
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },
  plugins: [
    new ProvidePlugin({
      process: require.resolve('process/browser'),
    }),
  ],
});
