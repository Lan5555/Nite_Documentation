const HtmlWebpackPlugin = require('html-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './layout/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production', // Change to 'development' for local dev
    module: {
        rules: [
            {
                test:/\.(png|jpg|jpeg|gif|svg)$/i,
                type:'asset/resource'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: './layout/index.html',
        }),
        new MonacoWebpackPlugin()
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'), // Fixed here
        open: true,
        compress: true,
        port: 3000,
        hot: true,
        historyApiFallback: true, // Helps with SPAs
    },
};
