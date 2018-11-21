/*
 * @Author: guangwei.bao 
 * @Date: 2018-11-21 16:58:52 
 * @Last Modified by: guangwei.bao 
 * @Last Modified time: 2018-11-21 16:58:52
 * @Describe: 实现一个复杂数据类型深克隆组件
 */

export const clone = function(obj) {
	var objClone = Array.isArray(obj) ? [] : {};
	if (obj && typeof obj === 'object') {
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				//判断ojb子元素是否为对象，如果是，递归复制
				if (obj[key] && typeof obj[key] === 'object') {
					objClone[key] = clone(obj[key]);
				} else {
					//如果不是，简单复制
					objClone[key] = obj[key];
				}
			}
		}
	}
	return objClone;
};
