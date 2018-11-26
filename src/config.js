/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-10 11:10:29 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-11-26 18:02:42
 * @Describe: 项目开发配置文件
 */
'use strict';

const projectEnv = process.env.NODE_ENV;
// console.log('projectEnv: ' + process.env.NODE_ENV);

// import webpack config resource
const CommonConfig = require('../config/');

let BUILD_NUMBER = ''; // 版本号
let FETCH_BASE_PATH = ''; //基础接口前缀
let FETCH_NOTICE_PATH = ''; //额外接口前缀
let BAIDU_LOCATION_KEY = ''; //百度地理定位api key(全网/专网)
let WEATHER_BASE_PATH = '';
let WEATHER_KEY = ''; //天气api key
//gis地址链接 http
let GIS_LINK = 'http://221.181.128.248:28080/ngwlangish5/h5/module/gis_index.html#/';
//gis地址链接 https
let GIS_LINK_HTTPS = 'https://221.181.128.248/ngwlangish5/h5/module/gis_index.html#/';

// 开发环境
if (projectEnv === 'development') {
	BUILD_NUMBER = '0.0.1'; // 版本号
	FETCH_BASE_PATH = `http://localhost:8384/${CommonConfig.PACKAGE_PATH}/`; //基础接口前缀
	FETCH_NOTICE_PATH = ''; //额外接口前缀
	BAIDU_LOCATION_KEY = 'd59pbG7HtM6LNA7KtFRgs4lIc6OB7pGr'; //百度地理定位api key(全网)
	WEATHER_BASE_PATH = 'https://free-api.heweather.com/v5/weather';
	WEATHER_KEY = '19713447578c4afe8c12a351d46ea922'; //天气api key
}

// 服务器环境
if (projectEnv === 'production') {
	BUILD_NUMBER = '0.0.1'; // 版本号
	FETCH_BASE_PATH = `https://niceboybao.com/${CommonConfig.PACKAGE_PATH}/`; //基础接口前缀
	FETCH_NOTICE_PATH = ''; //额外接口前缀
	BAIDU_LOCATION_KEY = '3OhLnfWO3PVKyAUNyZjLXkMjf7daTku1'; //百度地理定位api key(niceboybao.cn)
	WEATHER_BASE_PATH = 'https://free-api.heweather.com/v5/weather';
	WEATHER_KEY = '19713447578c4afe8c12a351d46ea922'; //天气api key
}

export default {
	BUILD_NUMBER: BUILD_NUMBER,
	FETCH_BASE_PATH: FETCH_BASE_PATH,
	FETCH_NOTICE_PATH: FETCH_NOTICE_PATH,
	BAIDU_LOCATION_KEY: BAIDU_LOCATION_KEY,
	WEATHER_BASE_PATH: WEATHER_BASE_PATH,
	WEATHER_KEY: WEATHER_KEY,
	GIS_LINK: GIS_LINK,
	GIS_LINK_HTTPS: GIS_LINK_HTTPS
};
