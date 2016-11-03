/**
 * @file:
 * @author: bohai (bohai@100.com).
 * @date: 16/11/2
 */

module.exports = {
    // 配置生成Source Maps，选择合适的选项
    devtool: 'eval-source-map',
    // 入口
    entry:  __dirname + "/app/main.js",
    // 出口
    output: {
        path: __dirname + "/public",
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
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules'
            }
        ]
    },

    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        port: 8082,
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
};