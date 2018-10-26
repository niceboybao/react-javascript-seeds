/*
 * @Author: guangwei.bao 
 * @Date: 2018-10-25 10:13:24 
 * @Last Modified by: guangwei.bao 
 * @Last Modified time: 2018-10-25 10:13:24
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
		return (
			<div>
				<div>子组件里面的state：{this.state.num}</div>
				<Test change={this.change} />
			</div>
		);
	}
}
