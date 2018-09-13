import React from 'react';
import { connect } from 'react-redux';
import utils from '../../../utils';
export default class Team3 extends React.Component {
	constructor(props) {
		super(props);
		utils.burry('Team3');
	}

	render() {
		return <div>Team3</div>;
	}
}
