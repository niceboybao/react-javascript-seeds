/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-18 17:08:40 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-18 18:06:53
 * @Describe: 设置页面
 */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, Popover } from 'antd';

import utils from '../../../utils';
import style from './index.scss';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
		this.toggleSetting = this.toggleSetting.bind(this);
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

	render() {
		const { show } = this.state;
		const text = <span>Title</span>;
		const content = (
			<div className={style.content}>
				<p>小字体</p>
				<p>标准字体（默认）</p>
				<p>大字体</p>
			</div>
		);

		return (
			<Popover placement="topLeft" content={content} trigger="click">
				<Icon
					className={show ? style.setting2 : style.setting1}
					onClick={this.toggleSetting}
					type="setting"
					theme="outlined"
				/>
			</Popover>
		);
	}
}
