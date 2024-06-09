const HtmlPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');
const {ModuleFederationPlugin} = require('webpack').container;

const {
  STYLE_FILE,
  PORT,
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
    mode: 'production',
    output: {
      path: resolve('build')
    },
    module: {
      rules: [
        {
          test: STYLE_FILE,
          use: styleLoader(false)
        }
      ]
    },
    plugins: [
      new HtmlPlugin({
        template: resolve('public/index.html'),
        publicPath: `http://localhost:${PORT}`
      }),
      new CssPlugin(),
      new ModuleFederationPlugin({
        name: 'signin',
        filename: 'entry.js',
        exposes: {
          '.': resolve('src/App')
        },
        shared: sharedDeps
      })
    ]
  };
};
