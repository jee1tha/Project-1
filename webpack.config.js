const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx','.js']
    },
    output: {
        path: path.join(__dirname,'/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            },{
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader','sass-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    devServer: {
            contentBase: './dist',
            hot: true
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './src/index.html'
            }
        )
    ]
}