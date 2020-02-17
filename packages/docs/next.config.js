// const images = require('remark-images')
// const emoji = require('remark-emoji')

const path = require("path");
const webpack = require("webpack");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],

  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    // Important: return the modified config

    // config.resolve.alias["@commerce-ui/core2"] = path.resolve(
    //     __dirname,
    //     "../core2/src/packages/"
    // );

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
        __DEV__: true,
        __BROWSER__: !isServer
      })
    );

    return config;
  }
});
