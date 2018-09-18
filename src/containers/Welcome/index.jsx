/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-11 17:29:55 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-18 17:59:07
 * @Describe: 首页
 */

import React from 'react';
import { connect } from 'react-redux';
import { Icon, Popover } from 'antd';

import utils from '../../utils';
import style from './index.scss';
import ToolBar from './ToolBar';
import Settings from './Settings';

export default class Welcome extends React.Component {
	constructor(props) {
		super(props);
		utils.burry('欢迎');
		this.state = {};
	}

	render() {
		// <Icon type="loading" />

		return (
			<div id={style.welcome}>
				{/*背景图*/}
				<div className={style.background}>
					<img className={style.img} src={utils.requireImg('welcome/google_01.jpeg')} alt="背景图" />
				</div>
				{/*内容*/}
				<div className={style.content}>
					<div style={{ height: 20 }} />
					<ToolBar />
					<Settings />
				</div>
			</div>
		);
	}
}
