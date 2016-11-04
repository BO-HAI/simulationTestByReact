/**
 * @file:
 * @author: bohai (bohai@100.com).
 * @date: 16/11/2
 */

module.exports = {
    // 配置生成Source Maps，选择合适的选项
    devtool: 'eval-source-map',
    // 入口
    entry:  [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8082',
        __dirname + "/app/main.js"
    ],
    // 出口
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules'
            },
            {
                test: /\.scss$/,
                loader: 'style!css?modules!sass?config=otherSassLoaderConfig'
            }
        ]
    },

    sassLoader: {
        includePaths: __dirname + "/app/sass"
    },

    otherSassLoaderConfig: {

    },

    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        port: 8082,
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
};