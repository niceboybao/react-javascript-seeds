/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-18 22:33:25 
 * @Last Modified by: guangwei.bao 
 * @Last Modified time: 2018-09-18 22:33:25
 * @Describe: 无
 */
import * as React from 'react';

export class CounterDisplay extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Current Count is {this.props.counter}</h1>
			</div>
		);
	}
}
