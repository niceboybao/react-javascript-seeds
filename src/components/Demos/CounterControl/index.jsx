/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-18 22:33:18 
 * @Last Modified by: guangwei.bao 
 * @Last Modified time: 2018-09-18 22:33:18
 * @Describe: 无
 */
import * as React from 'react';
import { Store } from 'redux';
import { Button, Icon } from 'antd';
import * as log from 'loglevel';

export class CounterControl extends React.Component {
	constructor(props) {
		super(props);
		// this.counter = props.counter;
		this.increase = this.increase.bind(this);
		this.decrease = this.decrease.bind(this);
	}

	increase() {
		log.debug("will call 'onPlusClick' props function.");
		this.props.onPlusClick();
	}

	decrease() {
		log.debug("will call 'onMinusClick' props function.");
		this.props.onMinusClick();
	}

	render() {
		return (
			<Button.Group>
				<Button type="primary" icon="plus" onClick={this.increase} />
				<Button type="primary" icon="minus" onClick={this.decrease} />
			</Button.Group>
		);
	}
}
