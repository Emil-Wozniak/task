const {override, fixBabelImports, addLessLoader, addWebpackPlugin} = require('customize-cra');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = override(
    fixBabelImports('import', {libraryDirectory: 'es', style: true}),
    addLessLoader({
        lessOptions: {javascriptEnabled: true, allowAny: true},
    }),
    addWebpackPlugin( new MiniCssExtractPlugin())
);

