var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');
var libraryName = 'index';
var entry = {};
entry[libraryName] = __dirname + '/src/index.js';
entry[libraryName + '.min'] = __dirname + '/src/index.js';

var config = {
    entry: entry,
    devtool: 'source-map',
    mode: 'none',
    output: {
        path: __dirname + '/lib',
        filename: "[name].js",
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    },
    plugins: [
        new CleanWebpackPlugin(['lib'])
    ]
};

module.exports = config;