const { ModuleFederationPlugin } = require("webpack").container;
const HTMLPlugin = require("html-webpack-plugin");

const { PORT, STYLE_FILE } = require("./constants");
const { resolve } = require("./utils");

const deps = require(resolve("package.json")).dependencies;

/**
 *
 * @param {any} env
 * @returns {import('webpack').Configuration}
 */
module.exports = (env) => {
  return {
    mode: "development",
    devServer: {
      port: PORT,
      open: true,
      hot: false,
    },
    module: {
      rules: [
        {
          test: STYLE_FILE,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  namedExport: false,
                },
              },
            },
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [
      new HTMLPlugin({
        template: resolve("public/index.html"),
        publicPath: ".",
      }),
      new ModuleFederationPlugin({
        name: "signup",
        filename: "entry.js",
        exposes: {
          ".": resolve('src/App.tsx'),
        },
        shared: {
          "react-dom": {
            requiredVersion: deps["react-dom"],
            singleton: true,
            eager: true,
          },
          react: {
            requiredVersion: deps.react,
            singleton: true,
            eager: true,
          },
        },
      }),
    ],
    stats: {
      logging: "error",
    },
  };
};
