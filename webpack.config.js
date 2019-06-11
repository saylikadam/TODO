// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html',
});

const cssPlugin = new MiniCSSPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
});

const config = (devMode) => ({
    entry: './src/index.js',
    devServer: {
        port: 5000
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {loader: 'html-loader'}
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: [devMode ? 'style-loader' : MiniCSSPlugin.loader, 'css-loader', 'sass-loader'],
            }
        ]
    },
    plugins: [htmlPlugin, cssPlugin]
});

module.exports = (env, argument) => {
    const devMode = argument.mode !== 'production';
    return config(devMode);
};

