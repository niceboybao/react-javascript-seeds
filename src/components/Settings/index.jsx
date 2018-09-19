/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-18 17:08:40 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-19 18:33:57
 * @Describe: 设置页面
 */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, Popover } from 'antd';

import utils from '../../utils';
import style from './index.scss';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
		this.toggleSetting = this.toggleSetting.bind(this);
		this.changeFontSize = this.changeFontSize.bind(this);
	}

	//显示隐藏设置弹框
	toggleSetting() {
		// this.props 和 this.state 可能是异步更新的，你不能依赖他们的值计算下一个state(状态)。
		// 错误
		// this.setState({
		// 	counter: this.state.counter + this.props.increment
		// });
		// 要解决这个问题，应该使用第 2 种 setState() 的格式，它接收一个函数，而不是一个对象。
		this.setState(
			(prevState) => ({
				show: !prevState.show
			}),
			() => {
				console.log('state show updated');
			}
		);
	}

	// 全局改变字体大小
	changeFontSize(type) {
		console.log('全局改变字体大小: ' + type);

		let fontSize = '16px';
		if (type == 0) {
			fontSize = '12px';
		} else if (type == 1) {
		} else if (type == 2) {
			fontSize = '20px';
		}
		document.getElementsByTagName('html')[0].style.fontSize = fontSize;
		// window.document.documentElement.setAttribute('data-theme', '123')
	}

	render() {
		const { show } = this.state;
		const text = <span>Title</span>;
		const content = (
			<div className={style.content}>
				<p onClick={() => this.changeFontSize(0)}>小字体</p>
				<p onClick={() => this.changeFontSize(1)}>标准字体（默认）</p>
				<p onClick={() => this.changeFontSize(2)}>大字体</p>
			</div>
		);

		return (
			<Popover placement="topLeft" content={content} trigger="click">
				<div onClick={this.toggleSetting} className={show ? style.setting_2 : style.setting_1}>
					<Icon className={show ? style.icon_2 : style.icon_1} type="setting" theme="outlined" />
					<span>&nbsp;&nbsp;个性化设置</span>
				</div>
			</Popover>
		);
	}
}
