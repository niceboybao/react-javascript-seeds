/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-18 15:48:02 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-18 16:24:30
 * @Describe: 关于页面(关于网站建设)
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as log from 'loglevel';

import utils from '../../utils';
import style from './index.scss';

export default class About extends React.Component {
	constructor(props) {
		super(props);
		utils.burry('关于');
	}

	render() {
		return <div>About</div>;
	}
}
