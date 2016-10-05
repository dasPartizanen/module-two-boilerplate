var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: 8080
    },

    entry: 'main.js',
    resolve: {
        root: path.join(__dirname,'src/js')
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel', 'eslint']
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'] // важен порядок перечисления этих модулей, справа-нлево
            },
            {
                test: /\.(gif|jpg|png|svg|woff2|woff|ttf|eot)$/,
                loaders: ['file-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};