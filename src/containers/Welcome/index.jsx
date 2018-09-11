/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-11 17:29:55 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-11 17:57:05
 * @Describe: 首页
 */

import React from 'react';
import { connect } from 'react-redux';

export default class Welcome extends React.Component {
	constructor(props) {
		super(props);
		console.log('Welcome constructor');
	}

	render() {
		return <div>Welcome</div>;
	}
}
