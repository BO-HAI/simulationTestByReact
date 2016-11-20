/**
 * @file:
 * @author: bohai (bohai@100.com).
 * @date: 16/11/2
 */

var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(ROOT_PATH, 'templates');

module.exports = {
    // 配置生成Source Maps，选择合适的选项
    devtool: 'eval-source-map',
    // 入口
    entry:  {
        app: path.resolve(APP_PATH, 'main.jsx'),
        vendors: ['react']
    },
    // 出口
    output: {
        path: BUILD_PATH,
        filename: "js/[name].js"
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
                loader: 'babel'
                //, query: {
                //    presets: ['es2015','react'],
                //    plugins: [
                //        'transform-react-jsx-img-import'
                //    ]
                //}
            },
            {
                test: /\.jsx/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                //loader: 'style!css?modules'
                loader: ExtractTextPlugin.extract('style', 'css?modules')
            },
            {
                test: /\.scss$/,
                //loader: 'style!css?modules!postcss!sass?sourceMap:true'
                loader: ExtractTextPlugin.extract('style', 'css?modules!postcss!sass?sourceMap:true')
            },
            //{
            //    test: /\.png$/,
            //    loader: 'url?limit=25000'
            //},
            //{
            //    test: /\.jpg$/,
            //    loader: 'file'
            //},
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 25000,
                    name: path.posix.join('/', 'images/[name].[hash:7].[ext]')
                }
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
    },

    plugins: [
        //这个使用uglifyJs压缩你的js代码
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        //把入口文件里面的数组打包成verdors.js
        new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'),
        new ExtractTextPlugin('css/[name].css'),
        new HtmlwebpackPlugin({
            title: '模拟考试',
            template: path.resolve(TEM_PATH, 'index.html'),
            filename: 'index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['app', 'vendors'],
            //要把script插入到标签里
            inject: 'body'
        })
    ],

    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        port: 8082,
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
};