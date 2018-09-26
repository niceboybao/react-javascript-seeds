/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-10 11:10:29 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-26 16:17:14
 * @Describe: 开发配置文件
 */

 
'use strict';

export const configClient = {
	buildNumber: 100, // 版本号
	basePath: 'https://github.com/niceboybao/', //接口前缀
	devPath: 'http://localhost:8080', // 开发环境接口api
	prodPath: 'https://github.com/niceboybao/', // 生产环境接口api
	api: '',
	location_key: '4IU3oIAMpZhfWZsMu7xzqBBAf6vMHcoa', //地理定位api key
	weather_key: '19713447578c4afe8c12a351d46ea922' //天气api key
};
