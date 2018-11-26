/*
 * @Author: guangwei.bao 
 * @Date: 2018-08-22 16:54:15 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-11-26 17:34:53
 * @Describe: 测试环境打包配置项
 */
'use strict';

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const baseWebpackConfig = require('./webpack.config.base.js');

// import webpack config resource
const CommonConfig = require('../config/');
//整个webpack配置对象
const devWebpackConfig = merge(baseWebpackConfig, {
	/*
	* 提供 mode 配置选项，告知 webpack 使用相应模式的内置优化。
	*/
	mode: 'development',
	/*
	* 控制是否生成，以及如何生成 source map。
	*/
	// 'source-map' nosources-source-map
	devtool: 'cheap-module-eval-source-map',

	/*
	* 配置 devServer
	它提供了一些配置项可以改变 DevServer 的默认行为。 要配置 DevServer ，除了在配置文件里通过 devServer 传入参数外，
	还可以通过命令行参数传入。 注意只有在通过 DevServer 去启动 Webpack 时配置文件里 devServer 才会生效，
	因为这些参数所对应的功能都是 DevServer 提供的，Webpack 本身并不认识 devServer 配置项。
	*/
	devServer: {
		// 要求服务器在针对任何命中的路由时都返回到 HTML 文件
		historyApiFallback: {
			// 使用正则匹配命中路由
			// rewrites: [
			// 	// /3w 开头的都返回 index.html
			// 	{ from: /^\/dist/, to: '/index.html' },
			// 	// 其它的都返回 index.html
			// 	{ from: /./, to: '/error.html' }
			// ]
		},
		// 关闭热加载 只需将下面2个属性改成false，和一个 HotModuleReplacementPlugin 热加载插件即可
		hot: true, // 是否开启模块热替换功能
		inline: true, // 在dev-server的两种不同模式之间切换。默认情况下，应用程序启用内联模式
		port: 8384, //端口
		// open: true, // 启用open后，开发服务器会打开浏览器。
		openPage: CommonConfig.PACKAGE_PATH + '/',
		// 不监听的文件或文件夹，支持正则匹配。默认为空
		// ignored: /node_modules/,
		// 配置 DevServer HTTP 服务器的文件根目录。 默认情况下为当前执行目录，通常是项目根目录
		contentBase: path.join(__dirname, '../' + CommonConfig.PACKAGE_PATH)
		// disableHostCheck:true  ??
	},

	/*
	* 扩展插件，在 Webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情。
	*/
	plugins: [
		//热加载插件
		new webpack.HotModuleReplacementPlugin(),

		// Webpack 首先从配置文件中读取这个值，然后注入
		// 如果你正在使用像react这样的库，那么在添加此DefinePlugin插件后，你应该看到捆绑大小显着下降。
		// 还要注意，任何位于/src的本地代码都可以关联到process.env.NODE_ENV环境变量

		new webpack.DefinePlugin({
			'process.env': JSON.stringify('development')
		}),

		// 使用 ParallelUglifyPlugin 并行压缩输出的 JS 代码
		new ParallelUglifyPlugin({
			// 传递给 UglifyJS 的参数
			uglifyJS: {
				output: {
					// 最紧凑的输出
					beautify: false,
					// 删除所有的注释
					comments: false
				},
				compress: {
					// 在UglifyJs删除没有用到的代码时不输出警告
					warnings: false,
					// 删除所有的 `console` 语句，可以兼容ie浏览器
					drop_console: true,
					// 内嵌定义了但是只用到一次的变量
					collapse_vars: true,
					// 提取出出现多次但是没有定义成变量去引用的静态值
					reduce_vars: true
				}
			}
		})
	]
});

module.exports = devWebpackConfig;
