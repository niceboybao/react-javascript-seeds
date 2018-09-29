/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-27 16:55:58 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-29 11:30:04
 * @Describe: 过滤掉空字段 && 判断字段是否为空
 */
'use strict';

// typeof 数据类型判断
const _typeof = function() {
	typeof undefined; // 'undefined'
	typeof null; // 'object'
	typeof true; // 'boolean'
	typeof 'string'; // 'string'
	typeof 18; // 'number'
	typeof []; //  'object'
	typeof {}; //  'object'
	typeof NaN; // 'number'
};

//  instanceof 数据类型判断
const _instanceof = function() {
	// https://www.ibm.com/developerworks/cn/web/1306_jiangjj_jsinstanceof/
};

const _boolean = function() {
	// boolean 返回false集合
	Boolean(0); // false
	Boolean(-0); // false

	Boolean(undefined); // false
	Boolean(null); // false

	Boolean(''); // false
	Boolean(false); // false

	Boolean(NaN); // false
};

//  参数是否为空
export const _isNotEmpty = function(param) {
	// "[object Number]"->"Number"
	const str = Object.prototype.toString.call(param);
	const _param = str.substr(8, str.length - 9);
	let flag = false;
	switch (_param) {
		case 'Undefined':
			// flag = false;
			break;

		case 'Null':
			// flag = false;
			break;

		case 'Boolean':
			if (param) {
				flag = true;
			}
			break;

		case 'String':
			if (param.length > 0) {
				flag = true;
			}
			break;

		case 'Number':
			// Object.prototype.toString.call(NaN)
			// "[object Number]"
			flag = true;
			break;

		case 'Object':
			// 判断对象是否为空
			if (Object.keys(param).length > 0) {
				flag = true;
			}
			// if (JSON.stringify(data) !== '{}') {
			// 	flag = true;
			// }
			break;
		case 'Array':
			if (param.length > 0) {
				flag = true;
			}
			break;
		default:
			console.error('数据类型判断异常');
			break;
	}
	return flag;
};

//  过滤掉接口异常字段

export const _filterEmpty = function(param) {
	//undefined和null
	if (typeof param === 'undefined' || param === null) {
		return '';
	} else if (param === 'undefined' || param === 'null') {
		//字符串的'undefined'和'null'
		return '';
	} else {
		return param;
	}
};
