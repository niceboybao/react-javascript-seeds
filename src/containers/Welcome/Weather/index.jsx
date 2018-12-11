/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-19 18:38:56 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-12-11 17:01:29
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
		this.state = {};
		this.weatherImg = this.weatherImg.bind(this);
	}

	// 根据接口字段匹配多种场景的图片
	weatherImg() {
		const txt = this.props.weather.now.cond.txt;
		let _img = '';
		switch (txt) {
			case '晴':
				_img = 'welcome/weather_sunshine.png';
				break;
			case '多云':
				_img = 'welcome/weather_little_sunshine.png';
				break;
			case '阴':
				_img = 'welcome/weather_cloudy.png';
				break;
			case '小雨':
				_img = 'welcome/weather_little_rain.png';
				break;
			case '中雨':
				_img = 'welcome/weather_big_rain.png';
				break;
			case '大雨':
				_img = 'welcome/weather_big_rain.png';
				break;
			default:
				break;
		}
		return _img;
	}

	render() {
		const { location, weather } = this.props;
		let _img = 'welcome/weather_sunshine.png';
		if (utils.isNotEmpty(weather.now)) {
			_img = this.weatherImg();
		}
		return (
			<div id={style.weather}>
				{utils.isNotEmpty(weather) && (
					<div className={style.temp}>
						<img src={utils.requireImg(_img)} alt="天气" />
						{utils.isNotEmpty(weather.now) && <span>{weather.now.tmp}°</span>}
					</div>
				)}
				{utils.isNotEmpty(location) && <div className={style.local}>{location.name}</div>}
			</div>
		);
	}
}
