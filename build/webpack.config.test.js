/*
 * @Author: Baldwin 
 * @Date: 2018-08-22 16:54:15 
 * @Last Modified by: Baldwin
 * @Last Modified time: 2018-08-22 20:26:24
 * @Describe: 测试环境打包配置项
 */

'use strict';
//path 模块提供了一些工具函数，用于处理文件与目录的路径
const path = require('path');

//整个webpack配置对象
const webpackConfig = {
	// 入口文件
	entry: path.resolve(__dirname, '../src/index.js'),
	// 出口文件
	output: {
		path: path.resolve(__dirname, '../www'), // 这里是项目输出的路径,__dirname表示当前文件的位置
		filename: '[hash].[name].js' // 这里是生成文件的名称，可起你想要的名字
		// ??
		// publicPath: ASSET_PATH,
		// ??
		// chunkFilename: "chunk/[name].[chunkhash].js"
	},
	// 指定开发环境
	mode: 'development'
};

module.exports = webpackConfig;
