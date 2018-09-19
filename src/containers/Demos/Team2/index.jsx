/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-18 22:32:27 
 * @Last Modified by: guangwei.bao 
 * @Last Modified time: 2018-09-18 22:32:27
 * @Describe: 无
 */
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
