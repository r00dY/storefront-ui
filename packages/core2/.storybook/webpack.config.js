const path = require("path");
const webpack = require("webpack");

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need

  // These two commands remove the unnecessary rule with SVG files that is default set by storybook.
  config.module.rules.pop();
  config.module.rules.pop();

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

  config.resolve.alias["@commerce-ui/core"] = path.resolve(
    __dirname,
    "../src/packages/"
  );

  // Return the altered config
  return config;
};
