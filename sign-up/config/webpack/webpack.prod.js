const HtmlPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
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
      path: resolve('build'),
      filename: './static/js/[hash:15].js'
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
      new CopyPlugin({
        patterns: [
          {
            from: resolve('public'),
            to: resolve('build'),
            filter: (fpath) => !fpath.includes('html')
          }
        ]
      }),
      new CssPlugin({
        filename: './static/css/[hash:15].css'
      }),
      new ModuleFederationPlugin({
        name: 'signup',
        filename: './static/js/entry.js',
        exposes: {
          '.': resolve('src/App')
        },
        shared: sharedDeps
      })
    ]
  };
};
