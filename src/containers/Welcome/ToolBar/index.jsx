/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-18 11:23:43 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-18 16:04:08
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
					<span>C</span>
					<span>Baldwin</span>
				</div>
				<div className={style.right}>
					<div className={style.item}>
						<a href="https://juejin.im/user/58ec89745c497d0062c633f7/posts" target="view_frame">
							我的文章
						</a>
					</div>
					<div className={style.item}>
						<Link to={'/tag'}>技术标签</Link>
					</div>
					<div className={style.item}>
						<Link to={'/home'}>个人中心</Link>
					</div>
					<div className={style.item}>
						<Link to={'/about'}>关于我</Link>
					</div>
				</div>
			</div>
		);
	}
}
