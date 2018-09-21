/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-19 18:38:56 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-21 14:40:41
 * @Describe: 天气组件
 */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import utils from '../../../utils';
import style from './index.scss';

export default class Weather extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id={style.weather}>
				<div className={style.temp}>
					<img src={utils.requireImg('welcome/weather_sunshine.png')} alt="天气" />
					<span>28°</span>
				</div>

				<div className={style.local}>郑州市</div>
			</div>
		);
	}
}
