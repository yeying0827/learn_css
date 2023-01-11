const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'), // 指定构建生成文件所在路径
        filename: '[name].[contenthash].js' // 指定构建生成的文件名，默认是main.js
    },

    module: {
        rules: [
            {
                test: /\.scss$/i,  // 匹配文件的正则表达式
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // ...
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css' // 这里也可以使用hash
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html', // 传递一个指定的模板html文件
            title: 'css学习',
            minify: { // 压缩HTML的配置
                minifyCSS: true, // 压缩HTML中出现的CSS代码，默认false
                minifyJS: true, // 压缩HTML中出现的JS代码，默认false
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true, // 和上一个配置配合，移除无用的空格和换行，默认false
                removeComments: true, // 移除html注释，默认false
            }
        })
    ]
}
