const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname,'./server/index.js'),
    target: 'node',
    mode: "production",
    node: {
        __filename: false,
        __dirname: false
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: require.resolve('babel-loader'),
                include:path.join(__dirname,'server/index.js'),
                options: {
                    presets: [["@babel/preset-env", {"modules": false}]]
                },
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    output: {
        pathinfo: true,
        path:   path.join(__dirname,'/public'),
        filename: 'server_bundle.js'
    }
};