/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-10 10:56:46 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-26 14:36:37
 * @Describe: 合并工具类，方便输出
 */
'use strict';

//  加载图片
import { requireImg } from './requireImg.js';
// 页面埋点
import { burry } from './burry.js';
// fetch 异常过滤
import { request } from './fetch.js';
// 接口参数处理(多种场景)
import { objToString } from './params.js';

export default {
	requireImg: requireImg,
	burry: burry,
	fetch: request,
	objToString: objToString
};
