/*
 * @Author: Baldwin 
 * @Date: 2018-08-22 16:39:36 
 * @Last Modified by: Baldwin
 * @Last Modified time: 2018-08-22 19:50:32
 * @Describe: config.dev.js和config.prod.js中一些公用的配置项
 */

'use strict';

const path = require('path');
const webpack = require('webpack');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
// const htmlWebpackPlugin =  require('html-webpack-plugin');

//整个webpack配置对象
const webpackConfig = {
	//入口
	entry: './src/index.js', // 这里是项目入口文件地址
	//出口
	ouput: {
		path: __dirname + '/www', // 这里是项目输出的路径,__dirname表示当前文件的位置
		filename: 'js/' + '[name].js' // 这里是生成文件的名称，可起你想要的名字
	}
};

module.exports = webpackConfig;

// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const Stylish = require("webpack-stylish");
// const CommonConfig = require("../config");
// // const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// const devMode = process.env.NODE_ENV === "development";
// const ASSET_PATH = CommonConfig.getWebpackpublicPath();

// module.exports = {
//   entry: {
//     main: ["@babel/polyfill", path.resolve(__dirname, "../src/main.js")]
//   },
//   output: {
//     path: path.resolve(__dirname, "../dist"),
//     publicPath: ASSET_PATH,
//     filename: "[name].js",
//     chunkFilename: "chunk/[name].[chunkhash].js"
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: "babel-loader",
//         options: {
//           presets: ["@babel/preset-env"]
//         }
//       },
//       {
//         test: /\.(css|scss)$/,
//         use: [
//           devMode ? "style-loader" : MiniCssExtractPlugin.loader,
//           "css-loader",
//           {
//             loader: "postcss-loader",
//             options: {}
//           },
//           "sass-loader"
//         ]
//       },
//       {
//         test: /\.(png|jpg|gif|svg)$/,
//         loader: "url-loader",
//         options: {
//           limit: 10000,
//           name: "./static/img/[name].[ext]?[hash]"
//         }
//       }
//     ]
//   },
//   resolve: {
//     modules: ["node_modules"],
//     extensions: [".web.js", ".js", ".jsx", ".json"]
//   },
//   mode: devMode ? "development" : "production",
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: "React App",
//       template: path.resolve(__dirname, "../public/index.html"),
//       favicon: path.resolve(__dirname, "../public/favicon.ico"), // 不知道怎么设置，设置了没用
//       minify: devMode
//         ? false
//         : {
//             removeAttributeQuotes: true,
//             collapseWhitespace: true,
//             html5: true,
//             minifyCSS: true,
//             removeComments: true,
//             removeEmptyAttributes: true
//           },
//       cache: true
//     }),
//     new MiniCssExtractPlugin({
//       // Options similar to the same options in webpackOptions.output
//       // both options are optional
//       filename: devMode ? "[name].css" : "style/[name].[hash].css",
//       chunkFilename: devMode ? "[id].css" : "style/[id].[hash].css"
//     }),
//     new Stylish()
//     // new BundleAnalyzerPlugin()
//   ]
// };
