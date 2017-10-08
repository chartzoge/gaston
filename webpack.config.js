"use strict";

const path = require("path");

module.exports = {
    entry: './client/application.js',
	output: {
		filename: 'application.js',
		path: path.resolve(__dirname, 'public/js')
	},
    module: {
        rules: [{
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            jquery: path.resolve(__dirname, "node_modules/jquery/dist/jquery.js"),
            bootstrap: path.resolve(__dirname, "node_modules/bootstrap/dist/js/bootstrap.js")
        }
    }
};
