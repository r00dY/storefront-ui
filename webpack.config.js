var path = require("path");

var jsonImporter = require("node-sass-json-importer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css"
        })
    ],
    entry: {
        bundle: "./index.js"
        // 'react': './presets/React/index.js',
    },
    output: {
        libraryTarget: "umd",
        library: "Storefront-engine",
        filename: "[name].js",
        path: path.resolve(__dirname, "./dist/"),
        globalObject: `typeof self !== 'undefined' ? self : this`
    },

    externals: [
        {
            "react-dom": {
                root: "ReactDOM",
                commonjs2: "react-dom",
                commonjs: "react-dom",
                amd: "react-dom"
            }
        },
        {
            react: {
                root: "React",
                commonjs2: "react",
                commonjs: "react",
                amd: "react"
            }
        },
        {
            "prop-types": {
                root: "PropTypes",
                commonjs2: "prop-types",
                commonjs: "prop-types",
                amd: "prop-types"
            }
        }
    ],

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/react", "@babel/env"]
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: "sass-loader",
                        // Apply the JSON importer via sass-loader's options.
                        options: {
                            importer: jsonImporter()
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: "svg-inline-loader"
            }
        ]
    }
};
