const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: '[name].boudle.js'
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
            }
            ,{
                test: /\.css$/,
                loader: ['vue-style-loader','css-loader'],
                exclude: path.join(__dirname,'/node_modules')
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}