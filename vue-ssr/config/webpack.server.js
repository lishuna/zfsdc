const path = require('path');
const wepackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const nodeExternal = require('webpack-node-externals');

module.exports = wepackMerge(baseConfig, {
    // 代表给后端用，避免打包加入fs等模块
    target: 'node',
    entry: { // 入口文件
        server: path.resolve(__dirname, '../src/server.entry.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].boudle.js',
        libraryTarget: 'commonjs2'
    },
    devtool: 'source-map',
    mode: 'development',
    externals:[nodeExternal({
        whitelist: /\.css$/
    })],
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Vue构建练习',
            filename: 'index.ssr.html',
            template: path.resolve(__dirname, '../index.ssr.html'),
            excludeChunks: ['server'],
            files: {
                js: 'client.bundle.js'
              }
        }),
        // new VueSSRServerPlugin()
    ]
})