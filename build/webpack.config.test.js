/*
 * @Author: Baldwin 
 * @Date: 2018-08-22 16:54:15 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-08-31 16:22:43
 * @Describe: 测试环境打包配置项
 * [可参考]深入浅出 Webpack小册：http://webpack.wuhaolin.cn/  
 */
'use strict';

// webpack
const webpack = require('webpack');
// path 模块提供了一些工具函数，用于处理文件与目录的路径
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//dev 开发环境变量
const DEV_ENV = require('../config/dev.env.js');
//import config resource
const CommonConfig = require('../config/');
const ASSET_PATH = CommonConfig.getWebpackpublicPath();

//整个webpack配置对象
const webpackConfig = {
	/*
	* JavaScript 执行入口文件
	*/
	entry: path.resolve(__dirname, '../src/index.js'),

	/*
	* 配置出口文件
	*/
	output: {
		// 这里是项目输出的路径,__dirname表示当前文件的位置,输出文件都放到 dist 目录下
		path: path.resolve(__dirname, '../www'),
		// 把所有依赖的模块合并输出到一个 [hash].[name].js 文件,这里是生成文件的名称，可起你想要的名字
		filename: '[name]/[hash].js',
		/*
		* 在复杂的项目里可能会有一些构建出的资源需要异步加载，加载这些异步资源需要对应的 URL 地址。
		配置发布到线上资源的 URL 前缀，为string 类型。 默认值是空字符串 ''，即使用相对路径。
		*/
		publicPath: ASSET_PATH,
		// 配置无入口的 Chunk 在输出时的文件名称
		chunkFilename: 'chunk/[name]_[chunkhash:8].js'
		// crossOriginLoading: '' Webpack 输出的部分代码块可能需要异步加载
	},

	/*
	* 提供 mode 配置选项，告知 webpack 使用相应模式的内置优化。
	*/
	mode: DEV_ENV.NODE_ENV,

	/*
	* Module：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。
	1 .条件匹配：通过 test 、 include 、 exclude 三个配置项来命中 Loader 要应用规则的文件。
	2 .应用规则：对选中后的文件通过 use 配置项来应用 Loader，可以只应用一个 Loader 或者按照从后往前的顺序应用一组 Loader，同时还可以分别给 Loader 传入参数。
	3 .重置顺序：一组 Loader 的执行顺序默认是从右到左执行，通过 enforce 选项可以让其中一个 Loader 的执行顺序放到最前或者最后。
	*/
	module: {
		// module.rules 数组配置了一组规则，告诉 Webpack 在遇到哪些文件时使用哪些 Loader 去加载和转换。
		rules: [
			{
				// 用正则去匹配要用该 loader 转换的 CSS 文件
				// test include exclude 这三个命中文件的配置项只传入了一个字符串或正则，其实它们还都支持数组类型
				test: /\.css$/,
				// 只命中src目录里的js文件，加快 Webpack 搜索速度
				include: path.resolve(__dirname, '../src'),
				// 排除 node_modules 目录下的文件
				exclude: [ path.resolve(__dirname, '../node_modules'), path.resolve(__dirname, '../bower_modules') ],
				// use: [ 'style-loader', 'css-loader?minimize' ]
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: true,
							minimize: true //开启 CSS 压缩
						}
					}
				],
				// 'post'把该 Loader 的执行顺序放到最后,'pre'放到最前
				enforce: 'post'
			},
			{
				// 用正则去匹配要用该 loader 转换的 JavaScript 文件
				test: /\.jss$/,
				// 用 babel-loader 转换 JavaScript 文件
				// ?cacheDirectory 表示传给 babel-loader 的参数，用于缓存 babel 编译结果加快重新编译速度
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: false
						}
					}
				],
				// 只命中src目录里的js文件，加快 Webpack 搜索速度
				include: path.resolve(__dirname, '../src')
			},
			{
				// 用正则去匹配要用该 loader 转换的 SCSS 文件
				test: /\.scss$/,
				// 使用一组 Loader 去处理 SCSS 文件。
				// 处理顺序为从后到前，即先交给 sass-loader 处理，再把结果交给 css-loader 最后再给 style-loader。
				use: [ 'style-loader', 'css-loader', 'sass-loader' ],
				// 排除 node_modules 目录下的文件
				exclude: path.resolve(__dirname, '../node_modules')
			},
			{
				// 对非文本文件采用 file-loader 加载
				test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
				use: [ 'file-loader' ]
			}
		]
	},

	/*
	* Webpack 在启动后会从配置的入口模块出发找出所有依赖的模块，Resolve 配置 Webpack 如何寻找模块所对应的文件。 
	Webpack 内置 JavaScript 模块化语法解析功能，默认会采用模块化标准里约定好的规则去寻找，但你也可以根据自己的需要修改默认的规则。
	*/
	resolve: {
		// 用于配置在尝试过程中用到的后缀列表,优先级从前往后
		extensions: [ '.config.base.js', '.config.dev.js', '.config.prod.js', '.js', '.jsx', '.json' ]
	},

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
		hot: false, // 是否开启模块热替换功能
		port: 8384, //端口
		open: true, // 启用open后，开发服务器会打开浏览器。
		// 此选项允许你添加白名单服务，允许一些开发服务器访问。
		allowedHosts: [ 'niceboybao.cn' ],
		openPage: 'www/',
		contentBase: path.join(__dirname, '../www')
	},

	/*
	* 代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。
	*/
	// Chunk: {},

	/*
	* 扩展插件，在 Webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情。
	*/
	plugins: [
		/*
		* HtmlWebpackPlugin 简化了HTML文件的创建，以便为你的webpack包提供服务。这对于在文件名中包含每次
		会随着编译而发生变化哈希的 webpack bundle 尤其有用。 你可以让插件为你生成一个HTML文件
		*/
		// 创建默认的index.html 文件
		new HtmlWebpackPlugin({
			title: 'webpack test page', // 模本文件标题
			filename: 'index.html', //配置输出文件名
			template: path.resolve(__dirname, '../src/index.html'), //模板文件路径，支持加载器
			minify: true
		}),
		// 创建share.html 文件
		new HtmlWebpackPlugin({
			title: 'share test page', // 模本文件标题
			filename: 'share.html', //配置输出文件名
			template: path.resolve(__dirname, '../src/share.html') //模板文件路径，支持加载器
		}),
		//Webpack 首先从配置文件中读取这个值，然后注入
		new webpack.DefinePlugin({
			'process.env': DEV_ENV
		})
	]
};

module.exports = webpackConfig;
