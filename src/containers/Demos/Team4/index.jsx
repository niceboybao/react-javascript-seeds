/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-30 17:12:56 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-12-19 14:23:49
 * @Describe: 有个想不起来的经典案例可以放着呢
 */

import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import * as log from 'loglevel';
import Fingerprint2 from 'fingerprintjs2';

import utils from '../../../utils';

export default class Team4 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sysObj: {}
		};
		utils.burry('Team4');
	}

	componentWillMount() {}
	componentDidMount() {
		this.initFingerprint2();
	}

	initFingerprint2() {
		// 使用浏览器指纹
		// https://blog.csdn.net/weixin_40430643/article/details/82498484 
		let obj = {};
		new Fingerprint2({
			// 配置项（可选）
			excludeSessionStorage: true, // 排除会话存储用户的浏览器支持
			excludeOpenDatabase: true, // 排除式用户浏览器的支持
			excludeIndexedDB: true, // 排除IndexedDB用户浏览器的支持
			excludeLanguage: true, // 排除浏览器的语言
			userAgent: true // 用户代理，包含浏览器版本号
		}).get((result, components) => {
			obj.macAddress = result;
			obj.allInfo = components;
			obj.sysInfo = this.judge_current_system();
			this.setState({
				sysObj: obj
			});
		});
	}

	// 判断当前系统
	judge_current_system() {
		log.debug('judge_current_system');
		let u = navigator.userAgent;
		//安卓手机
		if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
			return 'android';
		} else if (u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1) {
			//苹果手机
			return 'iphone';
		} else if (u.indexOf('Windows Phone') > -1) {
			//winphone手机
			return 'wondows phone';
		} else if (u.indexOf('windows') > -1) {
			// windows 系统
			return 'windows';
		} else if (u.indexOf('Macintosh') > -1) {
			// mac
			return 'macintosh';
		}
	}

	render() {
		const { sysObj } = this.state;
		return (
			<div>
				<h1>Team4</h1>
				{utils.isNotEmpty(sysObj) && (
					<div>
						浏览器指纹验证
						<div>macAddress:{sysObj.macAddress}</div>
						<div>sysInfo:{sysObj.sysInfo}</div>
					</div>
				)}
			</div>
		);
	}
}
