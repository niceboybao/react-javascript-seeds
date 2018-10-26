/*
 * @Author: guangwei.bao 
 * @Date: 2018-10-25 10:13:13 
 * @Last Modified by: guangwei.bao 
 * @Last Modified time: 2018-10-25 10:13:13
 * @Describe: 
 */

import React from 'react';
import { connect } from 'react-redux';

export default class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 0
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
		return <div>{this.state.num}</div>;
	}
}
