const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const utils = require('./utils.js');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build/dist'),
        filename: 'bundle.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.([jt])sx?$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                exclude: [utils.root('node_modules')]
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            filename: '[name].css',
                            chunkFilename: '[name].css',
                            ignoreOrder: false
                        }
                    },
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'less-loader'}
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i,
                loader: 'file-loader',
                options: {
                    digest: 'hex',
                    hash: 'sha512',
                    name: 'content/[hash].[ext]'
                }
            },
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', 'ts'],
        alias: {'@': path.resolve(__dirname, 'src/'),}
    },
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'}),
        new MiniCssExtractPlugin(),
    ],
    devServer: {historyApiFallback: true},
    externals: {config: JSON.stringify({apiUrl: 'http://localhost:3000'})}
}