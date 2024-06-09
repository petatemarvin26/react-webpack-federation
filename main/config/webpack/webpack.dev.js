const {ModuleFederationPlugin} = require('webpack').container;
const HTMLPlugin = require('html-webpack-plugin');

const {
  PORT,
  STYLE_FILE,
  sharedDeps,
  resolve,
  styleLoader
} = require('./common');

/**
 *
 * @param {any} env
 * @returns {import('webpack').Configuration}
 */
module.exports = (env) => {
  return {
    mode: 'development',
    devServer: {
      port: PORT,
      open: true,
      hot: false
    },
    module: {
      rules: [
        {
          test: STYLE_FILE,
          use: styleLoader(true)
        }
      ]
    },
    plugins: [
      new HTMLPlugin({
        template: resolve('public/index.html'),
        publicPath: '.'
      }),
      new ModuleFederationPlugin({
        name: 'main',
        remotes: {
          'sign-in': 'signin@http://localhost:3001/entry.js',
          'sign-up': 'signup@http://localhost:3002/entry.js'
        },
        shared: sharedDeps
      })
    ],
    stats: {
      logging: 'error'
    }
  };
};
