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
