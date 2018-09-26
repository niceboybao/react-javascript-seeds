/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-25 19:19:17 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-26 16:01:54
 * @Describe: 接口字段及必须字段的需求处理、异常处理
 */
'use strict';

// 接口参数obj转string
export const objToString = function(params) {
	let str = '';
	for (let item in params) {
		// break 语句用于跳出循环。
		// continue 用于跳过循环中的一个迭代。
		if (!params.hasOwnProperty(item)) {
			continue;
		}
		str += encodeURIComponent(item) + '=' + encodeURIComponent(params[item]) + '&';
	}
	return str.substr(0, str.length - 1);
};
