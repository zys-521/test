const path = require('path');
const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-numbers.js',
        library: 'webpackNumbers',
        libraryTarget: 'umd'
    },
    // 外部依赖 打包剔除
    // externals: {
    //     'lodash': {
    //         commonjs: 'lodash',
    //         commonjs2: 'lodash',
    //         amd: 'lodash',
    //         root: '_'
    //     }
    // },
    plugins: [
        new webpack.ProvidePlugin({
            reduce: ['lodash', 'reduce']
            // _: 'lodash'
        })
    ]
}