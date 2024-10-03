const webpack = require('webpack');

module.exports = {
    entry: "./scripts/index.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
    },
    devServer: {
        static: './public',
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};