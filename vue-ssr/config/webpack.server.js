const path = require('path');
const wepackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = wepackMerge(baseConfig,{
    // 代表给后端用，避免打包加入fs等模块
    target: 'node',
    entry: { // 入口文件
        server: path.resolve(__dirname,'../src/server.entry.js')
    },
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: '[name].[hash].js',
        libraryTarget: 'commonjs2'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },{
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.join(__dirname,'/src')]
            },{
                test: /\.css$/,
                loader: ['vue-style-loader','style-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Vue构建练习',
            filename: 'index.html',
            template: path.join(__dirname,'index.html')
        }),
        new VueLoaderPlugin()
    ]
})