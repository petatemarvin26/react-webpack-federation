const CssPlugin = require('mini-css-extract-plugin');

const {deps, name} = require('./constants');

const sharedDeps = {
  ...deps,
  'react-dom': {
    requiredVersion: deps['react-dom'],
    singleton: true
  },
  react: {
    requiredVersion: deps.react,
    singleton: true
  }
};

const localIdentName = (isdev) => {
  return isdev ? `${name}_[hash:10]_[local]` : `${name}_[hash:10]`;
};

const styleLoader = (isdev) => {
  return [
    isdev ? 'style-loader' : CssPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          namedExport: false,
          localIdentName: localIdentName(isdev)
        }
      }
    },
    'sass-loader'
  ];
};

module.exports = {
  sharedDeps,
  styleLoader
};
