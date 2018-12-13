/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-10 10:56:46 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-12-12 16:28:59
 * @Describe: 合并工具类，方便输出
 */
'use strict';

// 加载图片
import { requireImg } from './requireImg.js';
// 页面埋点
import { burry } from './burry.js';
// fetch 异常过滤
import { _getJson,_postJson } from './fetch.js';
// 接口参数处理(多种场景)
import { objToString } from './params.js';
// 过滤掉空字段 && 判断字段是否为空
import { _isNotEmpty, _filterEmpty } from './empty.js';
// 全局提示框
import { tips } from './toast.js';
// 深拷贝
import { clone } from './copy.js';
// 数字转金额格式
import { toMoney } from './toMoney.js';

export default {
	requireImg: requireImg,
	burry: burry,
	// fetch: request,
	getJson:_getJson,
	postJson:_postJson,
	objToString: objToString,
	isNotEmpty: _isNotEmpty,
	filterEmpty: _filterEmpty,
	Toast: tips, //Toast
	clone: clone,
	toMoney: toMoney
};
