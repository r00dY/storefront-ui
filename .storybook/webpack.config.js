const path = require("path");
const jsonImporter = require("node-sass-json-importer");

module.exports = (storybookBaseConfig, configType) => {
    // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    //
    // console.log(storybookBaseConfig, configType);
    //
    // Make whatever fine-grained changes you need

    // console.log(storybookBaseConfig.config.module.rules);

    storybookBaseConfig.config.module.rules = [];

    storybookBaseConfig.config.module.rules.push({
        test: /\.scss$/,
        use: [
            "style-loader",
            {
                loader: "css-loader",
                options: {
                    importLoaders: 1
                }
            },
            {
                loader: "sass-loader",
                options: {
                    importer: jsonImporter()
                }
            }
        ]
    });

    storybookBaseConfig.config.module.rules.push({
        test: /\.svg$/,
        loader: "svg-inline-loader",
        options: {
            removeSVGTagAttrs: false
        }
    });

    storybookBaseConfig.config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
        }
    });

    storybookBaseConfig.config.module.rules.push({
        test: /\.js$/,
        include: /node_modules\/crc/,
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"]
        }
    });

    // Return the altered config
    return storybookBaseConfig.config;
};
//
//
//
// module.exports = {
//     module: {
//         rules: [
//             {
//                 test: /\.scss$/,
//                 use: [
//                     "style-loader",
//                     {
//                         loader: "css-loader",
//                         options: {
//                             importLoaders: 1
//                         }
//                     },
//                     {
//                         loader: "sass-loader",
//                         options: {
//                             importer: jsonImporter()
//                         }
//                     }
//                 ]
//             },
//             {
//                 test: /\.svg$/,
//                 loader: "svg-inline-loader",
//                 options: {
//                     removeSVGTagAttrs: false
//                 }
//             },
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 loader: "babel-loader",
//                 options: {
//                     presets: ["@babel/preset-env", "@babel/preset-react"]
//                 }
//             },
//             // crc library is not well-transpiled and uses default parameters (which don't work on IE), it's loaded by imgix-core
//             {
//                 test: /\.js$/,
//                 include: /node_modules\/crc/,
//                 loader: "babel-loader",
//                 options: {
//                     presets: ["@babel/preset-env"]
//                 }
//             }
//             // {
//             //     test: /\.js$/,
//             //     exclude: /node_modules/,
//             //     loader: "eslint-loader",
//             //     options: {
//             //         // eslint options (if necessary)
//             //     }
//             // }
//         ]
//     }
// };
