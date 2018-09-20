/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-11 17:29:55 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-20 16:44:27
 * @Describe: 首页
 */

import React from 'react';
import { connect } from 'react-redux';
import { Icon, Popover } from 'antd';

import utils from '../../utils';
import style from './index.scss';
import ToolBar from './ToolBar';
import Settings from '../../components/Settings';

export default class Welcome extends React.Component {
	constructor(props) {
		super(props);
		utils.burry('欢迎');

		this.state = {};
		this.random = '';

		this.forkGitHub = this.forkGitHub.bind(this);
	}

	componentWillMount() {
		this.randomBackground();
	}

	//随机生成背景图
	randomBackground() {
		const num = Math.round(Math.random() * 26);
		const alp = String.fromCharCode(64 + parseInt(num)).toLowerCase();
		this.random = '01';
	}

	// 跳转到GitHub
	forkGitHub() {
		window.open('https://github.com/niceboybao');
	}

	render() {
		// <Icon type="loading" />
		const random = this.random;

		return (
			<div id={style.welcome}>
				{/*背景图*/}
				{random.length > 0 && (
					<div className={style.background}>
						<img
							className={style.img}
							src={utils.requireImg('welcome/background_' + random + '.jpg')}
							alt="背景图"
						/>
					</div>
				)}

				{/*内容*/}
				<div className={style.content}>
					<div style={{ height: 20 }} />
					<ToolBar />

					<span className={style['left-top']}>天气</span>
					<div className={style['left-bottom']}>
						<Settings show={true} text={true} />
					</div>
					<img
						className={style['right-top']}
						onClick={this.forkGitHub}
						src={utils.requireImg('welcome/forkme.png')}
						alt="fork me"
					/>
					<span className={style['right-bottom']}>Links</span>
				</div>
			</div>
		);
	}
}
