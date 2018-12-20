/*
 * @Author: guangwei.bao 
 * @Date: 2018-10-25 10:13:13 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-12-20 10:51:04
 * @Describe: 
 */

import React from 'react';
import { connect } from 'react-redux';
import * as log from 'loglevel';
export default class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 0,
			data: this.props.data
		};
	}

	componentWillMount() {
		this.setState(
			{
				num: 99
			},
			() => {
				this.props.change(this.state.num);
			}
		);
	}

	render() {
		const { num, data } = this.state;
		return (
			<div style={{ border: '1px solid' }}>
				<p>子组件数据： {num}</p>
				<p>父组件传下来的数据展示： {data}</p>
			</div>
		);
	}
}
