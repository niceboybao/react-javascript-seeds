/*
 * @Author: guangwei.bao 
 * @Date: 2018-08-30 20:09:25 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-04 15:54:04
 * @Describe: 工程配置文件
 */
'use strict';

//开发环境变量
const NODE_ENV = process.env.NODE_ENV;
// 获取webpack publicPath
const getWebpackpublicPath = () => {
	const urlObj = {
		development: '/www/',
		// development: 'https://cdn.example.com/assets/',
		production: '/www/'
	};

	switch (NODE_ENV) {
		case 'development':
			return urlObj.development;
		case 'production':
			return urlObj.production;
		default:
			return '/';
	}
};

//版本号
const currentBuildNumber = 100;
//基础路径
const basePath = '';

//require exports
module.exports = {
	getWebpackpublicPath,
	currentBuildNumber,
	basePath
};
