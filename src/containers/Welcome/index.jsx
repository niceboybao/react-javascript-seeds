/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-11 17:29:55 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-21 17:58:48
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

import { getLocation } from './actions';

const mapStateToProps = (state) => {
	return {
		location: state.welcomeReducer.location
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// 调用地图获取当前位置
		getLocationData: (city) => {
			dispatch(getLocation(city));
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

	getBaiDuApi() {
		// let oHead = document.getElementsByTagName('HEAD').item(0);
		// let oScript = document.createElement('script');
		// oScript.type = 'text/javascript';
		// oScript.src = 'http://api.map.baidu.com/api?v=2.0&ak=4IU3oIAMpZhfWZsMu7xzqBBAf6vMHcoa';
		// oHead.appendChild(oScript);

		let BMap = window.BMap; //取出window中的BMap对象
		let myCity = new BMap.LocalCity();
		// let WeatherLists = {};
		myCity.get((result) => {
			console.log('城市名称: ' + result.name); //城市名称
			this.props.getLocationData(result);
			// if (result.name) {
			//     /*通过当前位置城市信息获取天气*/
			//     axios.get('https://free-api.heweather.com/v5/weather?key=19713447578c4afe8c12a351d46ea922', {
			//         params: {
			//             city: result.name
			//         }
			//     }).then(function (res) {
			//         WeatherLists = res.data.HeWeather5[0];
			//         console.log(WeatherLists);
			//     });
			// }
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
						<Weather />
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
