/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-13 17:15:22 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-28 09:51:49
 * @Describe: 工程所有页面的数据埋点方法
 */
'use strict';

export const burry = function(pageName) {
	const css3 = 'color: #fff;background: #f00';

	console.log('埋点成功，进入了 ' + pageName + ' 页面',css3);
	// console.clear();
	// setting title
	document.title = pageName + ' - 我的博客';
};
