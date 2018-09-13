import React from 'react';
import { connect } from 'react-redux';
import utils from '../../../utils';

export default class Team2 extends React.Component {
	constructor(props) {
		super(props);
		utils.burry('Team2');
	}

	render() {
		return <div>Team2</div>;
	}
}
