const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        app: './app/app.js',
        vendor: ['angular']
    },
    devServer: {
        contentBase: './dist'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ "name": "vendor", "filename": "vendor.bundle.js" }),
        new ExtractTextPlugin("styles.css")
    ]
};