const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [
　　    'webpack-dev-server/client?http://localhost:9090',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, '../src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, '../dist'), // 输出的路径
        filename: 'app/[name]_[hash:8].js'  // 打包后文件
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
　　plugins: [
        new webpack.HotModuleReplacementPlugin(),
　　 　　new HtmlWebpackPlugin({
　　　　 　　template: path.resolve(__dirname, '../src/index.template.html'),
　　　　　　 inject: true
　　　　 })
　　]
}