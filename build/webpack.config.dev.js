/*
 * @Author: guangwei.bao 
 * @Date: 2018-08-22 16:54:15 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-05 18:03:56
 * @Describe: 测试环境打包配置项
 */
'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base.js');

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
			rewrites: [
				// /user 开头的都返回 user.html
				{ from: /^\/share/, to: '/share.html' },
				{ from: /^\/www/, to: '/index.html' },
				// 其它的都返回 index.html
				{ from: /./, to: '/error.html' }
			]
		},
		hot: true, // 是否开启模块热替换功能
		port: 8384, //端口
		open: true, // 启用open后，开发服务器会打开浏览器。
		openPage: 'www/'
		// 告诉服务器从哪个目录中提供内容。只用在你想要提供静态文件时才需要
		// contentBase: path.join(__dirname, '../www')
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
		})
	]
});

module.exports = devWebpackConfig;
