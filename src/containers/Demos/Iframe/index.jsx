/*
 * @Author: guangwei.bao 
 * @Date: 2018-10-31 17:40:12 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-10-31 18:07:16
 * @Describe: iframe和postmessage配合实现2个嵌套页面通信
 */

import React from 'react';
import { connect } from 'react-redux';
import utils from '../../../utils';

export default class Iframe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
		utils.burry('Iframe');
	}

	componentDidMount() {
		window.addEventListener('message', this.clickHandler.bind(this), false);
		// setTimeout(() => {
		//     console.log('setTimeout');
		// 	window.postMessage({ a: 1 },'http://localhost:8890/module/index.html');
		// }, 1000);
	}
	componentWillUnmount() {
		window.removeEventListener('message', this.clickHandler, false);
	}

	clickHandler(e) {
		const str = Object.prototype.toString.call(e.data);
		if (str.substr(8, str.length - 9) !== 'String') {
			return;
		}
		const data = JSON.parse(e.data);
		let text = '';
		//拿取到数据
		if (data.normalAddressFullName || data.splitName) {
			const { splitName, normalAddressId, normalAddressFullName } = data;
			debugger;
			if (normalAddressFullName.length > 0) {
				text = normalAddressFullName;
			} else if (splitName.length > 0) {
				text = splitName;
			}

			this.setState({
				text
			});

			// history.go(-1);
		}
	}
	/**
     * 渲染方法，尽量只做和渲染相关的事情。
     */
	render() {
		const { text } = this.state;
		const url =
			'http://221.181.128.248:28080/ngwlangish5/h5/module/gis_index.html#/Home?systemSource=NGWLANMKYY&orderNumber=1810311735300162389';

		return (
			<div id="myIframe" style={{ width: '100%', height: '600px' }}>
				<div>页面接受到传输的数据：{text}</div>
				<iframe name="myIframe" width="100%" height="100%" src={url} />
			</div>
		);
	}
}
