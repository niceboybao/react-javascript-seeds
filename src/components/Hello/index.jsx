import * as React from 'react';
import { Clock } from '../Clock';

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	render() {
		return (
			<div>
				<h1>
					Hello from {this.props.compiler} and {this.props.framework}!
				</h1>
				<Clock />
			</div>
		);
	}
}
