// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html',
});

const config = () => ({
    entry: './src/index.html',
    devServer: {
        port: 7000
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {loader: 'html-loader'}
            }
        ]
    },
    plugins: [htmlPlugin]
});

module.exports = () => {
  return config();
};

