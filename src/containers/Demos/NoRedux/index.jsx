/*
 * @Author: guangwei.bao 
 * @Date: 2018-10-25 10:13:24 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-10-30 21:03:41
 * @Describe: 实现一个没有redux的父子组件交互
 */

import React from 'react';
import { connect } from 'react-redux';
import utils from '../../../utils';
import Test from './Test';

export default class NoRedux extends React.Component {
	constructor(props) {
		super(props);
		utils.burry('NoRedux');
		this.state = {
			data: [ 1, 2, 3 ],
			num: 0
		};
		this.change = this.change.bind(this);
	}

	change(param) {
		this.setState({
			num: param
		});
	}

	render() {
		const { data } = this.state;
		return (
			<div>
				<p>父组件接受到子组件状态：{this.state.num}</p>
				<Test data={data} change={this.change} />
			</div>
		);
	}
}
