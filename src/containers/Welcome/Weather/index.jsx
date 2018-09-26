/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-19 18:38:56 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-26 18:00:39
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
		const { location, weather } = this.props;
		const arr = [
			'welcome/weather_sunshine.png',
			'welcome/weather_little_sunshine.png',
			'welcome/weather_cloudy.png',
			'welcome/weather_little_rain.png',
			'welcome/weather_big_rain.png'
		];
		return (
			// 多云 阴 小雨 中雨 大雨
			<div id={style.weather}>
				{Object.keys(weather).length && (
					<div className={style.temp}>
						<img src={utils.requireImg(arr[4])} alt="天气" />
						<span>
							{weather.now.tmp}°{weather.now.cond.txt}
						</span>
					</div>
				)}
				{Object.keys(location).length && <div className={style.local}>{location.name}</div>}
			</div>
		);
	}
}
