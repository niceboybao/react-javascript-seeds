/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-12 16:03:36 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-12 16:31:43
 * @Describe: 传入图片名称即可require图片
 */
'use strict';

//require 图片路径 方法
export const requireImg = function(image) {
	const URL = require('../images/' + image);
	return URL;
};



