/*
 * @Author: guangwei.bao 
 * @Date: 2018-11-21 17:01:28 
 * @Last Modified by: guangwei.bao 
 * @Last Modified time: 2018-11-21 17:01:28
 * @Describe: 数字转金额格式
 */
// https://www.colabug.com/2626489.html  想偷懒的话，toLocaleString 了解一下？

//将数字转换成金额显示
export const toMoney = function(index) {
	let num = +index;
	num = num.toFixed(2);
	num = +num;
	num = num.toLocaleString('zh', { style: 'currency', currency: 'CNY' });
	// num = num.toLocaleString();
	num = num.substr(1);
	return num; //返回的是字符串23,245.12保留2位小数
};
