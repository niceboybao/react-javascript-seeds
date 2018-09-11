/*
 * @Author: guangwei.bao 
 * @Date: 2018-08-22 16:54:12 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-11 14:15:03
 * @Describe: 生产环境打包配置项
 */
'use strict';

// path 模块提供了一些工具函数，用于处理文件与目录的路径
const path = require('path');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base.js');

//整个webpack配置对象
const prodWebpackConfig = merge(baseWebpackConfig, {
	/*
	* 提供 mode 配置选项，告知 webpack 使用相应模式的内置优化。
	*/
	mode: 'production',
	/*
	* 控制是否生成，以及如何生成 source map。
	*/
	// 'source-map' nosources-source-map
	devtool: 'nosources-source-map',

	/*
	* Module：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。
	1 .条件匹配：通过 test 、 include 、 exclude 三个配置项来命中 Loader 要应用规则的文件。
	2 .应用规则：对选中后的文件通过 use 配置项来应用 Loader，可以只应用一个 Loader 或者按照从后往前的顺序应用一组 Loader，同时还可以分别给 Loader 传入参数。
	3 .重置顺序：一组 Loader 的执行顺序默认是从右到左执行，通过 enforce 选项可以让其中一个 Loader 的执行顺序放到最前或者最后。
	*/
	module: {
		// module.rules 数组配置了一组规则，告诉 Webpack 在遇到哪些文件时使用哪些 Loader 去加载和转换。
		rules: [
			// 用该 loader 转换 HTML 文件
			// Reference: https://webpack.docschina.org/loaders/html-loader
			{
				test: /\.html$/,
				// 只命中src目录里的js文件，加快 Webpack 搜索速度
				include: path.resolve(__dirname, '../src'),
				use: [
					{
						loader: 'html-loader?minimize=true'
					}
				]
			}
		]
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
				// /www 开头的都返回 index.html
				{ from: /^\/www/, to: '/index.html' },
				// 其它的都返回 index.html
				{ from: /./, to: '/error.html' }
			]
		},
		hot: false, // 是否开启模块热替换功能
		port: 8384, //端口
		// 此选项允许你添加白名单服务，允许一些开发服务器访问。
		// allowedHosts: [ 'niceboybao.cn' ],
		// 告诉服务器从哪个目录中提供内容。只用在你想要提供静态文件时才需要
		contentBase: path.join(__dirname, '../www')
	},

	/*
	* 扩展插件，在 Webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情。
	*/
	plugins: [
		// Webpack 首先从配置文件中读取这个值，然后注入
		// 如果你正在使用像react这样的库，那么在添加此DefinePlugin插件后，你应该看到捆绑大小显着下降。
		// 还要注意，任何位于/src的本地代码都可以关联到process.env.NODE_ENV环境变量
		new webpack.DefinePlugin({
			'process.env': JSON.stringify('production')
		}),

		// 用于优化\最小化CSS资产。
		// Reference: https://github.com/NMFR/optimize-css-assets-webpack-plugin
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.bundle\.css$/g, //默认为/\.css$/g
			cssProcessor: require('cssnano'), //用于优化\最小化CSS的CSS处理器，默认为cssnano
			// 传递给 cssProcessor 的插件选项
			cssProcessorPluginOptions: {
				preset: [ 'default', { discardComments: { removeAll: true } } ]
			},
			canPrint: true //指示插件是否可以将消息打印到控制台，默认为 true
		}),

		// 使用Imagemin压缩项目中的所有图像
		// 确保插件位于添加图像的任何插件之后
		new ImageminPlugin({
			disable: process.env.NODE_ENV !== 'production', // Disable during development
			pngquant: {
				quality: '95-100'
			}
		})
	]
});

module.exports = prodWebpackConfig;
