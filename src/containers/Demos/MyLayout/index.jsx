/*
 * @Author: guangwei.bao 
 * @Date: 2018-10-31 18:12:58 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-10-31 18:13:56
 * @Describe: flex布局、水平垂直居中、loading
 */


import React from 'react';
import { connect } from 'react-redux';
import utils from '../../../utils';

export default class MyLayout extends React.Component {
	constructor(props) {
		super(props);
		utils.burry('MyLayout');
	}

	render() {
		return <div>MyLayout</div>;
	}
}