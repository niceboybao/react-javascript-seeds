/*
 * @Author: Baldwin 
 * @Date: 2018-08-22 16:54:15 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-08-23 11:26:48
 * @Describe: 测试环境打包配置项
 */

'use strict';
// webpack
var webpack = require('webpack');
// path 模块提供了一些工具函数，用于处理文件与目录的路径
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//dev 开发环境变量
const DEV_ENV = require('../config/dev.env.js');

//整个webpack配置对象
const webpackConfig = {
	// 配置入口文件
	entry: path.resolve(__dirname, '../src/index.js'),

	// 配置出口文件
	output: {
		path: path.resolve(__dirname, '../www'), // 这里是项目输出的路径,__dirname表示当前文件的位置
		filename: '[hash].[name].js', // 这里是生成文件的名称，可起你想要的名字
		// ??
		// publicPath: ASSET_PATH,
		// ??
		chunkFilename: 'chunk/[name].[chunkhash].js'
	},

	// 配置指定开发环境
	mode: DEV_ENV.NODE_ENV,

	module: {},

	resolve: {},

	// 配置 devServer
	devServer: {
		historyApiFallback: true,
		contentBase: path.join(__dirname, '../www')
	},

	// 配置插件
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html', //配置输出文件名
			template: path.resolve(__dirname, '../src/index.html') //模板文件路径，支持加载器
		}),
		//Webpack 首先从配置文件中读取这个值，然后注入
		new webpack.DefinePlugin({
			'process.env': DEV_ENV
		})
	]
};

module.exports = webpackConfig;
