const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

console.log('WEBPACK_ENV: ', process.env.WEBPACK_ENV);
console.log('WEBPACK_POLL: ', process.env.WEBPACK_POLL ? 'true' : 'false');

const libraryName = 'index';
const entry = {};
entry[libraryName] = path.resolve(__dirname, 'src/Uploader.js');
entry[libraryName + '.min'] = path.resolve(__dirname, 'src/Uploader.js');

const config = {
    entry,
    devtool: 'source-map',
    mode: 'none',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/,
        })],
    },
    plugins: [
        new CleanWebpackPlugin(['lib']),
    ],
};

if (process.env.WEBPACK_POLL) {
    config.watchOptions = {
        ignored: [/node_modules/, /example/, /lib/],
        poll: 1000,
    };
}

module.exports = config;
