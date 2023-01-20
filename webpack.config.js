'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('node:path')

module.exports = {
    entry: {
        index: './src/app.js',
        // colors: './src/colors.js',
        // radius: './src/radius.js',
    },
    output: {
        path: resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Drawing Canvas',
            template: './src/index.html',
            inject: 'body',
        }),
    ],
}
