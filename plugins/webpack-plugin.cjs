// /* eslint-disable */
// const { ProvidePlugin } = require('webpack');

// function webpackPlugin(context, options) {
//   return {
//     name: 'webpack-plugin',
//     configureWebpack(config) {
//       return {
//         module: {
//           rules: [
//             {
//               test: /\.m?js/,
//               resolve: {
//                 fullySpecified: false,
//               },
//             },
//           ],
//         },
//         plugins: [
//           new ProvidePlugin({
//             process: require.resolve('process/browser'),
//           }),
//         ],
//         resolve: {
//           fallback: {
//             stream: require.resolve('stream-browserify'),
//             path: require.resolve('path-browserify'),
//             buffer: require.resolve('buffer/'),
//             url: require.resolve('url'),
//             crypto: false,
//           },
//           alias: {
//             process: 'process/browser.js',
//           },
//         },
//       };
//     },
//   };
// }

// module.exports = {
//   webpackPlugin,
// };


/* eslint-disable */
const { ProvidePlugin } = require('webpack');

function webpackPlugin(context, options) {
  return {
    name: 'webpack-plugin',
    configureWebpack(config) {
      return {
        module: {
          rules: [
            {
              test: /\.m?js$/,
              resolve: {
                fullySpecified: false, // Fixes issues with ESM modules
              },
            },
          ],
        },
        plugins: [
          new ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'], // Makes `Buffer` globally available
          }),
        ],
        resolve: {
          fallback: {
            stream: require.resolve('stream-browserify'),
            path: require.resolve('path-browserify'),
            buffer: require.resolve('buffer/'),
            url: require.resolve('url'),
            crypto: false, // Disable unsupported Node.js crypto module
          },
          alias: {
            process: 'process/browser',
          },
        },
      };
    },
  };
}

module.exports = {
  webpackPlugin,
};
