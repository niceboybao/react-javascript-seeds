/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-30 17:12:56 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-10-13 17:47:31
 * @Describe: 实现一个react 文字拷贝
 * https://github.com/nkbt/react-copy-to-clipboard
 */

import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import utils from '../../../utils';

export default class Team4 extends React.Component {
	constructor(props) {
		super(props);
		utils.burry('Team4');
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
		// utils.message.loading('开始加载！');
		utils.message.success('复制成功！');
	}

	render() {
		const { text } = this.state;
		return (
			<div>
				<div>
					<span>{text}</span>
					<CopyToClipboard text={text} onCopy={this.onCopy}>
						<Button onClick={this.copyButton} type="primary">
							复制
						</Button>
					</CopyToClipboard>
				</div>
			</div>
		);
	}
}
