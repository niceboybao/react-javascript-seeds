/*
 * @Author: Baldwin 
 * @Date: 2018-08-22 16:54:02 
 * @Last Modified by: Baldwin
 * @Last Modified time: 2018-08-22 17:49:04
 * @Describe: 开发环境打包配置项
 */

'use strict';

// const path = require('path');
const webpack = require('webpack');

// const ROOT_PATH = path.resolve(__dirname);
// const APP_PATH = path.resolve(ROOT_PATH, 'app');
// const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
// const htmlWebpackPlugin =  require('html-webpack-plugin');

//整个webpack配置对象
const webpackConfig = {
	//入口
	entry: '../src/index.js', // 这里是项目入口文件地址
	//出口
	ouput: {
		path: __dirname + '/www', // 这里是项目输出的路径,__dirname表示当前文件的位置
		filename: 'js/' + '[name].js' // 这里是生成文件的名称，可起你想要的名字
	},
	module: {},
	resolve: {},
	devServer: {},
	plugins: [
        //Webpack 首先从配置文件中读取这个值，然后注入
		new webpack.DefinePlugin({
			'process.env': require('../config/dev.env.js')
		})
	]
};

module.exports = webpackConfig;

// const webpack = require("webpack");
// const config = require("./webpack.config.base.js");
// const WebpackDevServer = require("webpack-dev-server");
// const opener = require("opener");
// const PORT = process.env.PORT || 8000;

// config.entry.main = (config.entry.main || []).concat([
//   // 'react-hot-loader/patch', // Code is automatically patched in v4
//   `webpack-dev-server/client?http://localhost:${PORT}/`,
//   "webpack/hot/dev-server"
// ]);

// config.plugins = (config.plugins || []).concat([
//   new webpack.HotModuleReplacementPlugin()
// ]);

// const compiler = webpack(config);

// const server = new WebpackDevServer(compiler, {
//   hot: true,
//   // noInfo: true,
//   quiet: true,
//   historyApiFallback: true,
//   filename: config.output.filename,
//   publicPath: config.output.publicPath,
//   stats: {
//     colors: true
//   }
// });

// server.listen(PORT, "localhost", () => {
//   console.log(`server started at localhost:${PORT}`);
//   // opener(`http://localhost:${PORT}`)
// });
