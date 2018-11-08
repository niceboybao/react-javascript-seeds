/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-11 17:29:55 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-11-08 20:26:15
 * @Describe: 首屏
 */

import React from 'react';
import { connect } from 'react-redux';
import { Icon, Popover } from 'antd';

import utils from '../../utils';
import style from './index.scss';
import ToolBar from './ToolBar';
import Settings from '../../components/Settings';
import Weather from './Weather';
import Links from './Links';
import Foot from './Foot';

import { getLocation, getWeather } from './actions';

const mapStateToProps = (state) => {
	return {
		location: state.welcomeReducer.location,
		weather: state.welcomeReducer.weather
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// 调用地图获取当前位置
		getLocationData: (city) => {
			dispatch(getLocation(city));
		},
		// 调用天气API
		getWeatherData: (city) => {
			dispatch(getWeather(city));
		}
	};
};

class Welcome extends React.Component {
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
	componentDidMount() {
		// 调用地图获取当前位置
		this.getBaiDuApi();
	}

	// 调用地图获取当前位置(精确到市)
	getBaiDuApi() {
		let BMap = window.BMap; //取出window中的BMap对象
		let myCity = new BMap.LocalCity();
		myCity.get((result) => {
			console.log('城市名称: ' + result.name); //城市名称
			// 保存地理位置到数据流
			this.props.getLocationData(result);
			// 调用天气API
			this.props.getWeatherData(result.name);
		});
	}

	// 调用地图获取当前位置(精确到省、市)
	getBaiDuApi_bak() {
		let map = new BMap.Map('mymap');
		let point = new BMap.Point(116.331398, 39.897445);
		map.centerAndZoom(point, 12);

		let geolocation = new BMap.Geolocation();
		let _this = this;
		geolocation.getCurrentPosition(function(r) {
			if (this.getStatus() == BMAP_STATUS_SUCCESS) {
				let mk = new BMap.Marker(r.point);
				map.addOverlay(mk);
				map.panTo(r.point);
				console.log('城市名称: ' + r.address.province + ' ' + r.address.city); //城市名称
				// 保存地理位置到数据流
				_this.props.getLocationData(r.address);
				// 调用天气API
				_this.props.getWeatherData(r.address.city);
			} else {
				alert('failed' + this.getStatus());
			}
		});
	}

	//随机生成背景图
	randomBackground() {
		const num = Math.round(Math.random() * 26);
		const alp = String.fromCharCode(64 + parseInt(num)).toLowerCase();
		this.random = '01';
	}

	// 跳转到GitHub
	forkGitHub() {
		window.open('https://github.com/niceboybao/react-javascript-seeds');
	}

	render() {
		// <Icon type="loading" />
		const random = this.random;

		const { weather, location } = this.props;

		return (
			<div id={style.welcome}>
				{/*百度地图定位dom*/}
				<div id="mymap" />
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
					<div style={{ height: 30 }} />
					<ToolBar />
					<div className={style.body}>
						<div className={style.date}>
							<div>23:59</div>
							<span>Good evening, My friends.</span>
						</div>
					</div>

					<Foot />
				</div>

				{/*4个角落*/}
				<div className={style.angle}>
					<span className={style['left-top']}>
						<Weather location={location} weather={weather} />
					</span>
					<span className={style['left-bottom']}>
						<Settings show={true} text={true} />
					</span>
					<img
						className={style['right-top']}
						onClick={this.forkGitHub}
						src={utils.requireImg('welcome/forkme.png')}
						alt="fork me"
					/>
					<span className={style['right-bottom']}>
						<Links />
					</span>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
