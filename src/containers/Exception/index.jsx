/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-10 15:38:44 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-12 16:21:22
 * @Describe: 路由匹配不上的404页面
 */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import typeConfig from './typeConfig.js';
import utils from '../../utils';
import style from './index.scss';

export default class Exception extends React.Component {
	// render
	render() {
		console.log(this.props.match.params);

		let configPage = typeConfig['404'];
		if (this.props.match.params) {
			if (this.props.match.params.id) {
				configPage = typeConfig[this.props.match.params.id];
			}
		}

		return (
			<div id={style.exception}>
				<div className={style.box}>
					<img className="" src={utils.requireImg('exception/404.svg')} alt="" />
					<div className={style.text}>
						<p>
							<font className={style.font_1}>{configPage.title}</font>
						</p>
						<p>
							<font className={style.font_2}>{configPage.desc}</font>
						</p>
						<Button type="primary">
							<Link to={'/welcome'}>返回首页</Link>
						</Button>
					</div>
				</div>

				<h1 />
			</div>
		);
	}
}