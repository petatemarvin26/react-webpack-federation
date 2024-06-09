const TsCheck = require('fork-ts-checker-webpack-plugin');
const TsPaths = require('tsconfig-paths-webpack-plugin');
const {merge} = require('webpack-merge');

const devconf = require('./webpack.dev');
const prodconf = require('./webpack.prod');
const {SRC_FILE, resolve} = require('./common');

module.exports = (env) => {
  const isdev = !!env['WEBPACK_SERVE'];

  /**
   * @type {import('webpack').Configuration}
   */
  const conf = {
    entry: resolve('index.ts'),
    module: {
      rules: [
        {
          test: SRC_FILE,
          loader: 'babel-loader',
          options: {
            configFile: resolve('config/.babelrc')
          }
        }
      ]
    },
    plugins: [new TsCheck()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      plugins: [new TsPaths({configFile: resolve('tsconfig.json')})]
    }
  };

  if (isdev) return merge(conf, devconf(env));
  return merge(conf, prodconf(env));
};
