/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-18 15:48:02 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-18 16:20:11
 * @Describe: 个人中心页面(我的简历)
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import utils from '../../utils';
import style from './index.scss';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		utils.burry('个人中心');
	}

	render() {
		return <div>Home</div>;
	}
}
