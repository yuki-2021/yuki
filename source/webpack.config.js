/**
 *  Webpack的配置文件
 *  
 *  Webpack基于Node平台  -> 默认使用模块化 CommonJS
 *  src 源码 采用ES6模块化来写
**/

// Resolve处理相对路径到绝对路径
const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin  = require('optimize-css-assets-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'build.js',
        // __dirname表示当前路径
        path: resolve(__dirname,'dist')
    },
    // loaders
    module:{
        rules: [
            {
                test: /\.scss$/,
                loaders: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,

                loaders: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                exclude: /\.(js|css|scss|jpg|png|gif|html)$/,
                // url-loader 依赖于 file-loader
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: '/fonts'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/build.css'
        }),
        new OptimizeCssAssetsPlugin()
    ],
    mode: 'production'
}
