/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-11 17:29:55 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-14 18:06:41
 * @Describe: 首页
 */

import React from 'react';
import { connect } from 'react-redux';

import utils from '../../utils';
import style from './index.scss';

export default class Welcome extends React.Component {
	constructor(props) {
		super(props);
		utils.burry('欢迎');
	}

	render() {
		return (
			<div id={style.welcome}>
				{/*背景图*/}
				<div className={style.background}>
					<img className={style.img} src={utils.requireImg('welcome/google_01.jpeg')} alt="背景图" />
				</div>
				{/*内容*/}
				<div>
					<div>1</div>
					<div>2</div>
					<div>2</div>
					welcome
				</div>
			</div>
		);
	}
}
