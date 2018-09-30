/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-18 11:23:43 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-30 16:08:36
 * @Describe: 导航条 
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import utils from '../../../utils';
import style from './index.scss';

export default class ToolBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id={style.toolbar}>
				<div className={style.left}>
					<div>C</div>
					<span>&nbsp;Baldwin</span>
				</div>
				<div className={style.right}>
					<a href="https://juejin.im/user/58ec89745c497d0062c633f7/posts" target="view_frame">
						<div className={style.item}>我的文章</div>
					</a>
					<Link to={'/tag'}>
						<div className={style.item}>技术标签</div>
					</Link>
					<Link to={'/home'}>
						<div className={style.item}>个人中心</div>
					</Link>
					<Link to={'/about'}>
						<div className={style.item}>关于我</div>
					</Link>
					<Link to={'/demo'}>
						<div className={style.item}>Demo</div>
					</Link>
				</div>
			</div>
		);
	}
}
