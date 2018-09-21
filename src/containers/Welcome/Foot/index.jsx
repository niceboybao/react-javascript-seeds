/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-19 18:38:47 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-21 15:49:03
 * @Describe: 首页底部
 */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, Popover } from 'antd';

import utils from '../../../utils';
import style from './index.scss';

export default class Foot extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sure: false
		};

		this.clickHeart = this.clickHeart.bind(this);
	}
	clickHeart() {
		this.setState((prevState) => ({
			sure: !prevState.sure
		}));
	}

	render() {
		const { sure } = this.state;
		return (
			<div className={style.foot}>
				<div className={style.text}>
					<div className={style.text1}>
						“Progress is impossible without change, and those who cannot change their minds cannot change
						anything.”
					</div>
					<div className={style.text2}>
						<span>“heart”</span>
						<Icon
							onClick={this.clickHeart}
							className={style.heart}
							type="heart"
							theme={sure ? 'filled' : 'outlined'}
						/>
					</div>
				</div>
			</div>
		);
	}
}
