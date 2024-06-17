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
        name: 'auth',
        filename: './entry.js',
        exposes: {
          '.': resolve('src/App'),
          './pages/SignIn': resolve('src/pages/SignIn'),
          './pages/SignUp': resolve('src/pages/SignUp'),
          './reducers': resolve('src/ducks/reducers')
        },
        shared: sharedDeps
      })
    ],
    stats: {
      logging: 'error'
    }
  };
};
