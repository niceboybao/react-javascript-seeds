//依赖组件
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';


export default class Team1 extends React.Component {
	constructor(props) {
		super(props);
		console.log('Team1 constructor');

	}
	
	render() {
		return (
			<div>
				Team1
			</div>
		);
	}
}

