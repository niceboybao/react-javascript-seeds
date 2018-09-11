import * as React from 'react';
import { Store } from 'redux';
import { Button, Icon } from 'antd';

export class CounterControl extends React.Component {
	constructor(props) {
		super(props);
		// this.counter = props.counter;
		this.increase = this.increase.bind(this);
		this.decrease = this.decrease.bind(this);
	}

	increase() {
		console.log("will call 'onPlusClick' props function.");
		this.props.onPlusClick();
	}

	decrease() {
		console.log("will call 'onMinusClick' props function.");
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
