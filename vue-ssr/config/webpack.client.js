const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge');

// 合并配置
module.exports = webpackMerge(baseConfig, {
    entry: {
        client: path.resolve(__dirname, '../src/client.entry.js')
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        compress: false,
        port: 8081
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Vue构建练习',
            filename: 'index.html',
            template: path.resolve(__dirname, '../index.html')
        }),
        new VueLoaderPlugin()
    ]
});