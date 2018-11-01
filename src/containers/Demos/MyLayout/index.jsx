/*
 * @Author: guangwei.bao 
 * @Date: 2018-10-31 18:12:58 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-11-01 20:57:53
 * @Describe: flex布局、水平垂直居中、loading
 */

import React from 'react';
import { connect } from 'react-redux';

import { Divider } from 'antd';
import utils from '../../../utils';
import style from './index.scss';

export default class MyLayout extends React.Component {
	constructor(props) {
		super(props);
		utils.burry('MyLayout');
	}

	render() {
		// dangerouslySetInnerHTML 听说这个单词这么长，是故意的，应为有可能不合时宜的使用innerHTML会导致XSS攻击
		return (
			<div id={style['my-layout']}>
				<Divider>dangerouslySetInnerHTML</Divider>
				<div className={style['inner-html']}>
					<div>{'<h3>富文本内容解析前</h3>'}</div>
					<div
						dangerouslySetInnerHTML={{
							__html: '<h3>富文本内容解析后</h3>'
						}}
					/>
				</div>

				<Divider style={{ margin: '30px 0' }}>flex布局</Divider>
				<div className={style['my-flex']}>flex布局</div>
				<Divider style={{ margin: '30px 0' }}>固定宽高盒子 水平垂直居中</Divider>
				<div className={style['my-center']}>
					<div className={style['center-item']}>
						<span>方法一：flex</span>
						<div className={style['center-1-father']}>
							<div className={style['center-1-son']} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
