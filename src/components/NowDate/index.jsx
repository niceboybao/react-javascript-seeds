/*
 * @Author: guangwei.bao 
 * @Date: 2018-11-17 17:57:05 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-11-17 17:59:53
 * @Describe: 时间组件
 */

import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { Icon, Popover } from 'antd';

import utils from '../../utils';
import style from './index.scss';

export default class NowDate extends React.Component {
	constructor(props) {
		super(props);
	}

	// 当前时间字符串
	getNowFormatDate() {
		let date = new Date();
		let seperator1 = '-';
		let seperator2 = ':';
		// 年
		const year = date.getFullYear();
		// 月
		let month = date.getMonth() + 1;
		if (month >= 1 && month <= 9) {
			month = '0' + month;
		}
		// 天
		let strDate = date.getDate();
		if (strDate >= 0 && strDate <= 9) {
			strDate = '0' + strDate;
		}
		// 小时
		let hours = date.getHours();
		if (hours >= 0 && hours <= 9) {
			hours = '0' + hours;
		}
		// 分钟
		let minutes = date.getMinutes();
		if (minutes >= 0 && minutes <= 9) {
			minutes = '0' + minutes;
		}
		// 秒
		let seconds = date.getSeconds();
		if (seconds >= 0 && seconds <= 9) {
			seconds = '0' + seconds;
		}

		// const currentdate =
		// 	year +
		// 	seperator1 +
		// 	month +
		// 	seperator1 +
		// 	strDate +
		// 	' ' +
		// 	hours +
		// 	seperator2 +
		// 	minutes +
		// 	seperator2 +
		// 	seconds;
		const currentdate =
			'99' +
			year +
			// seperator1 +
			month +
			// seperator1 +
			strDate +
			// ' ' +
			hours +
			// seperator2 +
			minutes +
			// seperator2 +
			seconds;

		return currentdate;
	}

	render() {
		return <div>123</div>;
	}
}
