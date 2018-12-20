/*
 * @Author: guangwei.bao 
 * @Date: 2018-11-17 17:57:05 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-12-12 15:23:20
 * @Describe: 时间组件
 */

import React from 'react';
import * as log from 'loglevel';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { Icon, Popover } from 'antd';

import utils from '../../utils';
import style from './index.scss';

export default class NowDate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dateNum: '',
			dateType: ''
		};
		this.intervalTime = null;
	}

	componentWillMount() {
		this.intervalTime = setInterval(() => {
			this.getNowFormatDate();
		}, 1000);
	}
	componentDidMount() {}

	// 组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
	componentWillUnmount() {
		log.debug('NowDate component componentWillUnmount');
		// clear intervalTime
		clearInterval(this.intervalTime);
	}

	// 当前时间字符串
	getNowFormatDate() {
		let date = new Date();
		let seperator1 = '-';
		let seperator2 = ':';
		// 年
		const year = date.getFullYear();
		// 月
		let month = this.handleZero(date.getMonth());
		// 天
		let strDate = this.handleZero(date.getDate());
		// 小时
		let hours = this.handleZero(date.getHours());

		// 分钟
		let minutes = this.handleZero(date.getMinutes());
		// 秒
		let seconds = this.handleZero(date.getSeconds());

		this.setState({
			dateNum: hours + ':' + minutes,
			dateType: this.getHoursType(date.getHours())
		});
	}

	// 统一处理时间一位数和二位数
	handleZero(num) {
		if (num >= 0 && num <= 9) {
			return '0' + num;
		} else {
			return num;
		}
	}
	getHoursType(hour) {
		if (hour > 0 && hour < 12) {
			return 'Good Morning, My friend';
		} else if (hour > 12 && hour < 18) {
			return 'Good Afternoon, My friend';
		} else if (hour > 18 && hour < 24) {
			return 'Good evening, My friend';
		} else {
			return 'error';
		}
	}

	render() {
		// const getNowFormatDate
		const { dateNum, dateType } = this.state;
		return (
			<div className={style.date}>
				<div>{dateNum}</div>
				<span>{dateType}</span>
			</div>
		);
	}
}
