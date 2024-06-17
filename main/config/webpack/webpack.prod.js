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
        name: 'main',
        remotes: {
          auth: 'auth@http://localhost:3001/static/js/entry.js',
          report: 'report@http://localhost:3002/static/js/entry.js'
        },
        shared: sharedDeps
      })
    ]
  };
};
