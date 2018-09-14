/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-05 16:02:28 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-14 16:37:45
 * @Describe: webpack打包公共配置项
 */
'use strict';

// path 模块提供了一些工具函数，用于处理文件与目录的路径
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HappyPack = require('happypack');
// 在内部创建的每个HappyPack插件都会创建自己的线程，用于运行加载器。但是，如果您使用多个HappyPack插件，
// 那么最好自己创建一个线程池，然后配置插件以共享该池，从而最大限度地减少其中线程的空闲时间。
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });
const marked = require('marked');
const renderer = new marked.Renderer();

//import config resource
const CommonConfig = require('../config/');
//ASSET_PATH
const ASSET_PATH = CommonConfig.getWebpackpublicPath();
// isProd
const isProd = CommonConfig.NODE_ENV === 'production';

// HTML缩小器
// Reference: https://github.com/kangax/html-minifier
const minifyHtml = isProd
	? {
			minifyCSS: true, // 压缩 HTML 中出现的 CSS 代码
			minifyJS: true, // 压缩 HTML 中出现的 JS 代码
			removeComments: true,
			collapseBooleanAttributes: true,
			removeRedundantAttributes: true,
			removeEmptyAttributes: true,
			removeScriptTypeAttributes: true,
			collapseWhitespace: true,
			conservativeCollapse: true,
			preserveLineBreaks: true
		}
	: {};

//整个webpack配置对象
const baseWebpackConfig = {
	/*
	* JavaScript 执行入口文件
	*/
	entry: isProd
		? {
				app: path.resolve(__dirname, '../src/app.jsx')
			}
		: {
				app: [ 'react-hot-loader/patch', path.resolve(__dirname, '../src/app.jsx') ]
			},
	/*
	* 配置出口文件
	*/
	output: {
		// 这里是项目输出的路径,__dirname表示当前文件的位置,输出文件都放到 dist 目录下
		path: path.resolve(__dirname, '../www'),
		// 把所有依赖的模块合并输出到一个 [hash].[name].js 文件,这里是生成文件的名称，可起你想要的名字
		filename: isProd ? 'scripts/[name].[hash].bundle.js' : 'scripts/[name].bundle.js',
		/*
		* 在复杂的项目里可能会有一些构建出的资源需要异步加载，加载这些异步资源需要对应的 URL 地址。
		配置发布到线上资源的 URL 前缀，为string 类型。 默认值是空字符串 ''，即使用相对路径。
		*/
		publicPath: ASSET_PATH,
		sourceMapFilename: '[file].map',
		pathinfo: isProd ? false : true,
		// 配置无入口的 Chunk 在输出时的文件名称
		chunkFilename: isProd ? 'scripts/[name].[chunkhash].chunk.js' : 'scripts/[name].chunk.js' // 指定分离出来的代码文件的名称
		// crossOriginLoading: '' Webpack 输出的部分代码块可能需要异步加载
	},

	/*
	* Module：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。
	1 .条件匹配：通过 test 、 include 、 exclude 三个配置项来命中 Loader 要应用规则的文件。
	2 .应用规则：对选中后的文件通过 use 配置项来应用 Loader，可以只应用一个 Loader 或者按照从后往前的顺序应用一组 Loader，同时还可以分别给 Loader 传入参数。
	3 .重置顺序：一组 Loader 的执行顺序默认是从右到左执行，通过 enforce 选项可以让其中一个 Loader 的执行顺序放到最前或者最后。
	*/
	module: {
		// module.rules 数组配置了一组规则，告诉 Webpack 在遇到哪些文件时使用哪些 Loader 去加载和转换。
		rules: [
			// 该 loader 转换的 js jsx 文件
			{
				test: /\.js[x]?$/,
				loader: 'eslint-loader',
				// 'post'把该 Loader 的执行顺序放到最后,'pre'放到最前
				enforce: 'pre',
				include: [ path.join(__dirname, 'src') ],
				options: {
					fix: true
				}
			},

			// 该 loader 转换的 js jsx 文件
			{
				test: /\.js[x]?$/,
				// HappyPack通过并行转换文件使得初始webpack构建更快。
				use: 'happypack/loader?id=babel',
				// 只命中src目录里的js文件，加快 Webpack 搜索速度
				include: path.resolve(__dirname, '../src'),
				// 排除 node_modules 目录下的文件
				exclude: path.resolve(__dirname, '../node_modules')
			},

			// 用该 loader 转换的 CSS 文件
			{
				test: /\.css$/,
				// 排除 node_modules 目录下的文件
				// exclude: path.resolve(__dirname, '../node_modules'),
				// 处理顺序为从后到前，即先交给 sass-loader 处理，再把结果交给 css-loader 最后再给 style-loader。
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							// you can specify a publicPath here
							// by default it use publicPath in webpackOptions.output
							publicPath: '../'
						}
					},
					'css-loader'
				]
			},

			// 用该 loader 转换的 SCSS 文件
			{
				test: /\.scss$/,
				// 只命中src目录里的js文件，加快 Webpack 搜索速度
				include: path.resolve(__dirname, '../src'),
				// 处理顺序为从后到前，即先交给 sass-loader 处理，再把结果交给 css-loader 最后再给 style-loader。
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							// you can specify a publicPath here
							// by default it use publicPath in webpackOptions.output
							publicPath: '../'
						}
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							importLoaders: 1, // 在CSS加载器之前应用的加载器数量
							modules: true, // 启用/禁用CSS模块
							localIdentName: '[path]__[name]__[local]__[hash:base64:5]' // 配置生成的ident
						}
					},
					'sass-loader'
				]
			},

			// 用该 loader 配置图片
			{
				// 对非文本文件采用 file-loader 加载
				test: /.*\.(gif|png|jpe?g|svg|webp)$/i,
				// 只命中src目录里的js文件，加快 Webpack 搜索速度
				include: path.resolve(__dirname, '../src'),
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192, //内联文件的字节限制为数据URL
							outputPath: 'images/', // 输出目录
							name: isProd ? '[name].[hash].[ext]' : '[name].[ext]' //自定义文件名
						}
					},
					// {
					// 	loader: 'image-webpack-loader',
					// 	options: {
					// 		mozjpeg: {
					// 			// 压缩 jpeg 的配置
					// 			progressive: true,
					// 			quality: 65
					// 		},
					// 		optipng: {
					// 			// 使用 imagemin-optipng 压缩 png，enable: false 为关闭
					// 			enabled: false
					// 		},
					// 		pngquant: {
					// 			// 使用 imagemin-pngquant 压缩 png
					// 			quality: '65-90',
					// 			speed: 4
					// 		},
					// 		gifsicle: {
					// 			// 压缩 gif 的配置
					// 			interlaced: false
					// 		},
					// 		webp: {
					// 			// 开启 webp，会把 jpg 和 png 图片压缩为 webp 格式
					// 			quality: 75
					// 		}
					// 	}
					// }
				]
			},

			// 用该 loader 配置字体图标
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				// 只命中src目录里的js文件，加快 Webpack 搜索速度
				include: path.resolve(__dirname, '../src'),
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192, //内联文件的字节限制为数据URL
							outputPath: 'font/', // 输出目录
							name: isProd ? '[name].[hash].[ext]' : 'font/[name].[ext]' //自定义文件名
						}
					}
				]
			},

			// 用该 loader 配置json数据
			{
				test: /\.json$/,
				// 只命中src目录里的js文件，加快 Webpack 搜索速度
				include: path.resolve(__dirname, '../src'),
				loader: 'json-loader'
			},

			// 用该 loader 处理markdown文件
			{
				test: /\.md$/,
				// 只命中src目录里的js文件，加快 Webpack 搜索速度
				include: path.resolve(__dirname, '../doc'),
				use: [
					'cache-loader',
					'html-loader',
					{
						loader: 'markdown-loader',
						options: {
							pedantic: true,
							renderer
						}
					}
				]
			}
		]
	},

	/*
	* Webpack 在启动后会从配置的入口模块出发找出所有依赖的模块，Resolve 配置 Webpack 如何寻找模块所对应的文件。 
	Webpack 内置 JavaScript 模块化语法解析功能，默认会采用模块化标准里约定好的规则去寻找，但你也可以根据自己的需要修改默认的规则。
	*/
	resolve: {
		// 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤
		// 其中 __dirname 表示当前工作目录，也就是项目根目录
		modules: [ path.resolve(__dirname, '../node_modules') ],
		// 用于配置在尝试过程中用到的后缀列表,优先级从前往后
		extensions: [ '.js', '.jsx', '.json' ]
		// 独完整的 `react.min.js` 文件就没有采用模块化，忽略对 `react.min.js` 文件的递归解析处理
		// noParse: [/react\.min\.js$/],
	},

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
			filename: 'index.html', //配置输出文件名
			favicon: './favicon.ico',
			template: './src/index.html', //模板文件路径，支持加载器
			// Reference: https://github.com/kangax/html-minifier
			minify: minifyHtml
			// inject: 'head', //是否将所有资产注入给定template
		}),
		// 创建error.html 文件
		new HtmlWebpackPlugin({
			filename: 'error.html', //配置输出文件名
			favicon: './favicon.ico',
			inject: false, //是否将所有资产注入给定template
			template: './src/error.html', //模板文件路径，支持加载器
			// Reference: https://github.com/kangax/html-minifier
			minify: minifyHtml
		}),

		// HappyPack通过并行转换文件使得初始webpack构建更快。
		new HappyPack({
			id: 'babel',
			threadPool: happyThreadPool,
			// babel-loader 支持缓存转换出的结果，通过 cacheDirectory 选项开启
			loaders: [ 'cache-loader', 'babel-loader?cacheDirectory', 'source-map-loader' ]
		}),

		//webpack 4.x独有 分离css
		new MiniCssExtractPlugin({
			filename: isProd ? 'css/[name].[contenthash].bundle.css' : 'css/[name].bundle.css', // 生成文件的文件名
			allChunks: true //从所有额外的 chunk(additional chunk) 提取
		}),

		// 将单个文件或整个目录复制到构建目录
		new CopyWebpackPlugin([
			{
				from: 'src/mock',
				to: 'mock'
			}
		]),

		// 使用交互式可缩放树形图可视化webpack输出文件的大小。
		// Reference: https://www.npmjs.com/package/webpack-bundle-analyzer
		new BundleAnalyzerPlugin({
			// 在static模式下，将生成包含报告的单个HTML文件。
			analyzerMode: 'static',
			// 在默认浏览器中自动打开报告。
			openAnalyzer: false
		})
	],

	// 3.x 以前的版本是使用 CommonsChunkPlugin 来做代码分离的，而 webpack 4.x 则是把相关的功能包到了
	// optimize.splitChunks 中，直接使用该配置就可以实现代码分离。
	// Reference: https://webpack.docschina.org/plugins/split-chunks-plugin/
	optimization: {
		splitChunks: {
			automaticNameDelimiter: '.', //此选项允许您指定用于生成的名称的分隔符。
			cacheGroups: {
				// 抽离自己写的公共代码
				commons: {
					chunks: 'initial',
					name: 'common', // 打包后的文件名，任意命名
					minChunks: 2, //分割前必须共享模块的最小块数。
					minSize: 3000 // 只要超出3000字节就生成一个新包
				},
				// 抽离第三方插件
				vendor: {
					test: /node_modules/, // 指定是node_modules下的第三方包
					chunks: 'initial',
					name: 'vendor', // 打包后的文件名，任意命名
					// 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
					priority: 10
				}
			}
		}
	}
};

module.exports = baseWebpackConfig;
