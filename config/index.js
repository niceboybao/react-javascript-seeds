/*
 * @Author: guangwei.bao 
 * @Date: 2018-08-30 20:09:25 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-12-20 14:40:16
 * @Describe: webpack 配置文件
 */
'use strict';

// 获取开发环境变量
console.log('工程启动环境: ' + process.env.NODE_ENV);
const NODE_ENV = process.env.NODE_ENV;

// 工程打包到的文件夹名称
// 部署到服务器上的时候，可以根据需求改变打包文件夹名称，一改全改
// let PACKAGE_PATH = 'www'; //开发环境 生产环境
// 用nodejs 优化webpack 打包配置
let PACKAGE_PATH = 'react-javascript-seeds'; // 线上环境
// if (NODE_ENV === 'productions') {
// 	PACKAGE_PATH = 'react-javascript-seeds'; // 线上环境
// }
// if (window !='undefined') {
// 	if (window.location.href.indexOf('niceboybao.com') > -1) {
// 		PACKAGE_PATH = 'react-javascript-seeds'; // 线上环境
// 	}
// }
console.log('工程打包部署路径: ' + PACKAGE_PATH);

// 根据开发环境设置前缀
const getWebpackpublicPath = () => {
	return '/' + PACKAGE_PATH + '/';
};

module.exports = {
	NODE_ENV: NODE_ENV,
	PACKAGE_PATH: PACKAGE_PATH,
	getWebpackpublicPath
};
