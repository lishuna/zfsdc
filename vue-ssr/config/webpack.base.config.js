const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: '[name].[hash].js'
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
                loader: ['vue-style-loader','style-loader','css-loader']
            }
        ]
    },
    plugins: [
        
    ]
}