/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-11 17:29:55 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-13 17:22:43
 * @Describe: 首页
 */

import React from 'react';
import { connect } from 'react-redux';
import utils from '../../utils';

export default class Welcome extends React.Component {
	constructor(props) {
		super(props);
		utils.burry('欢迎');
	}

	render() {
		return <div>Welcome</div>;
	}
}
