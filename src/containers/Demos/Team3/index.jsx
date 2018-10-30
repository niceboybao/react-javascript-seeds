/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-18 22:32:27 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-10-30 20:43:10
 * @Describe:  有个想不起来的经典案例可以放着呢
 */
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
