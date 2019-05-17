const path = require("path");
const webpack = require("webpack");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    // Important: return the modified config

    config.resolve.alias["storefront-ui"] = path.resolve(
      __dirname,
      "src/packages/"
    );

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false
              }
            },
            titleProp: true
          }
        }
      ]
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: true
      })
    );

    return config;
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
  target: "serverless"
};
