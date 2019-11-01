const path = require("path");
const webpack = require("webpack");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    // Important: return the modified config

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

    // config.plugins.push(
    //   new webpack.DefinePlugin({
    //     __DEV__: true,
    //     __BROWSER__: !isServer
    //   })
    // );

    // Pick data layer

    config.resolve.alias["data"] = path.resolve(__dirname, "./data/");

    return config;
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
  target: "server"
};
