const path = require('path');

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
        // Perform customizations to webpack config
        // Important: return the modified config

        config.resolve.alias['storefront-ui$'] = path.resolve(__dirname, 'src/index.js');

        return config
    },
    webpackDevMiddleware: config => {
        // Perform customizations to webpack dev middleware config
        // Important: return the modified config
        return config
    }
}
