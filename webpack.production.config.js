/**
 * @file:
 * @author: bohai (bohai@100.com).
 * @date: 16/11/2
 */

var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules_dir, 'react/dist/react.min.js');

module.exports = {
    // 配置生成Source Maps，选择合适的选项
    devtool: 'eval-source-map',
    // 入口
    //entry:  [
    //    __dirname + "/app/main.jsx"
    //],
    entry: {
        app: path.resolve(__dirname, 'app/main.jsx'),

        // Since react is installed as a node module, node_modules/react,
        // we can point to it directly, just like require('react');
        // 当 React 作为一个 node 模块安装的时候，
        // 我们可以直接指向它，就比如 require('react')
        vendors: ['react']
    },
    // 出口
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    //resolve: {
    //    alias: {
    //        'react': pathToReact
    //    }
    //},
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
                test: /\.jsx?$/,
                loader: 'babel'
                //, query: {
                //    presets: ['es2015','react']
                //}
            },
            {
                test: /\.jsx/,
                exclude: /node_modules/,
                loader: 'babel'
                //, query: {
                //    presets: ['es2015','react']
                //}
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules'
            },
            {
                test: /\.scss$/,
                loader: 'style!css?modules!postcss!sass?sourceMap:true'
            },
            {
                test: /\.(png|jpg)/,
                loader: 'url?limit=25000'
            }
        ]
    },
    postcss: [
        require('autoprefixer'),//调用autoprefixer插件
        require('postcss-assets')({
            basePath: 'app/',
            loadPaths: ['images/']
        })
    ],
    sassLoader: {
        includePaths:[
            __dirname + '/app/sass'
        ],
        outputStyle: 'compressed',
        sourceMap: true
    }

};