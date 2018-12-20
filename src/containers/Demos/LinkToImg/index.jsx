/*
 * @Author: guangwei.bao 
 * @Date: 2018-10-29 17:48:12 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-12-20 10:50:50
 * @Describe: 连接转化成二维码并能成功保存(Img图片)
 */

import React from 'react';
import { connect } from 'react-redux';
const QRCode = require('qrcode.react');
import * as log from 'loglevel';

import { Button } from 'antd';
import utils from '../../../utils';

export default class LinkToImg extends React.Component {
	constructor(props) {
		super(props);
		this.canvasToImg = false;
		this.url = 'https://juejin.im/user/58ec89745c497d0062c633f7/posts';
		this.state = {
			url: '',
			canvasUrl: '',
			imgType: ''
		};
		utils.burry('LinkToImg');
		this.renderImg = this.renderImg.bind(this);
	}

	componentDidUpdate() {
		// 需要把canvas转化成img
		if (this.canvasToImg) {
			let iCanvas = document.getElementsByTagName('canvas')[0];
			if (iCanvas) {
				this.setState({
					canvasUrl: iCanvas.toDataURL('image/png')
				});
			}
		}
	}

	// 生成二维码方法
	renderImg(type) {
		this.canvasToImg = false;
		if (type === 'img') {
			this.canvasToImg = true;
			type = 'canvas';
		}

		this.setState({
			canvasUrl: '',
			imgType: type,
			url: this.url
		});
	}

	render() {
		const { url, imgType, canvasUrl } = this.state;
		return (
			<div id="LinkToImg">
				<p>
					<a href={this.url} target="view_frame">
						链接： {this.url}
					</a>
				</p>
				<p>
					<Button onClick={() => this.renderImg('canvas')} style={{ margin: '0 10px' }}>
						生成canvas格式二维码
					</Button>
					<Button onClick={() => this.renderImg('svg')} style={{ margin: '0 10px' }}>
						生成svg格式二维码
					</Button>
					<Button onClick={() => this.renderImg('img')} style={{ margin: '0 10px' }}>
						生成img格式二维码(支持保存)
					</Button>
				</p>
				{!utils.isNotEmpty(canvasUrl) &&
				utils.isNotEmpty(url) &&
				utils.isNotEmpty(imgType) && (
					<div>
						<p>{imgType}格式：</p>
						<QRCode size={250} value={url} renderAs={imgType} />
					</div>
				)}
				{utils.isNotEmpty(canvasUrl) && (
					<div>
						<p>img格式：</p>
						<img src={canvasUrl} alt="二维码" width="250" height="250" />
					</div>
				)}
			</div>
		);
	}
}
