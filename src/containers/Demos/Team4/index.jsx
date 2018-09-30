/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-30 17:12:56 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-30 17:57:35
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
			text: '实现一个react 文字拷贝'
		};
		this.onCopy = this.onCopy.bind(this);
	}

	onCopy() {
		console.log('onCopy');
	}

	render() {
		const { text } = this.state;
		return (
			<div>
				<div>
					<span>{text}</span>
					<CopyToClipboard text={text} onCopy={this.onCopy}>
						<Button type="primary">复制</Button>
					</CopyToClipboard>
				</div>
			</div>
		);
	}
}
