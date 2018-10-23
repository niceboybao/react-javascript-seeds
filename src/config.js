/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-10 11:10:29 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-10-22 10:50:25
 * @Describe: 开发配置文件
 */

 
'use strict';

export const configClient = {
	buildNumber: 100, // 版本号
	basePath: 'https://github.com/niceboybao/', //接口前缀
	devPath: 'http://localhost:8080', // 开发环境接口api
	prodPath: 'https://github.com/niceboybao/', // 生产环境接口api
	api: '',
	location_key: 'd59pbG7HtM6LNA7KtFRgs4lIc6OB7pGr', //百度地理定位api key(全网)
	location_key1: '3OhLnfWO3PVKyAUNyZjLXkMjf7daTku1', //百度地理定位api key(niceboybao.cn)
	weather_key: '19713447578c4afe8c12a351d46ea922' //天气api key
};
