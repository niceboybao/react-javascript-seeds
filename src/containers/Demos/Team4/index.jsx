/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-30 17:12:56 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-10-30 20:43:29
 * @Describe: 有个想不起来的经典案例可以放着呢
 */

import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import utils from '../../../utils';

export default class Team4 extends React.Component {
	constructor(props) {
		super(props);
		utils.burry('Team4');
	}

	render() {
		return <div>Team4</div>;
	}
}
