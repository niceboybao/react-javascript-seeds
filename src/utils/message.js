/*
 * @Author: guangwei.bao 
 * @Date: 2018-10-13 17:29:54 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-10-30 16:53:11
 * @Describe: 全局提示
 */
import { message } from 'antd';

const duration = 2; //提示框时长

export const tips = {
	info: function(text) {
		message.info(text, duration);
	},
	success: function(text) {
		message.success(text, duration);
	},
	error: function(text) {
		message.error(text, duration);
	},
	warning: function(text) {
		message.warning(text, duration);
	},
	loading: function(text) {
		message.loading(text, duration * 15).then(() => {
			message.info('加载成功', duration);
		});
	}
};
