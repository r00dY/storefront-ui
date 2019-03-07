// next.config.js
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");

module.exports = withSass({
    webpack(config, options) {
        config.resolve.modules.push(__dirname);

        config.module.rules.push({
            test: /\.svg$/,
            loader: "svg-inline-loader"
        });

        return config;
    }
});
