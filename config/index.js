/*
 * @Author: guangwei.bao 
 * @Date: 2018-08-30 20:09:25 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-05 17:33:28
 * @Describe: 工程配置文件
 */
'use strict';

// 获取开发环境变量
console.log('工程启动环境: ' + process.env.NODE_ENV);
const NODE_ENV = process.env.NODE_ENV;

// 根据开发环境设置前缀
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

// 版本号
const currentBuildNumber = 100;

module.exports = {
	NODE_ENV: NODE_ENV,
	getWebpackpublicPath,
	currentBuildNumber: currentBuildNumber
};
