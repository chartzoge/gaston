"use strict";

const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./client/application.js",
    output: {
        filename: "js/application.js",
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [{
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }]
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new webpack.DefinePlugin({
            __ENV__: JSON.stringify(require("./config/config-dev.json"))
        }),
        new CopyWebpackPlugin([{
            from: "./client/index.html"
        }])
    ],
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
};
