/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-30 17:12:56 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-10-30 20:42:17
 * @Describe: 实现一个react 文字拷贝效果
 * https://github.com/nkbt/react-copy-to-clipboard
 */

import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import utils from '../../../utils';

export default class CopyText extends React.Component {
	constructor(props) {
		super(props);
		utils.burry('CopyText');
		this.state = {
			text: Math.floor(Math.random() * 1e18 + 1)
		};
		this.onCopy = this.onCopy.bind(this);
		this.copyButton = this.copyButton.bind(this);
	}

	onCopy() {
		console.log('onCopy');
	}
	copyButton() {
		utils.message.success('复制成功！');
	}

	render() {
		const { text } = this.state;
		return (
			<div>
				<div>
					<span>订单号： {text}</span>
					<CopyToClipboard text={text} onCopy={this.onCopy}>
						<Button onClick={this.copyButton} style={{ margin: '0 20px' }}>
							复制
						</Button>
					</CopyToClipboard>
				</div>
			</div>
		);
	}
}
