/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-18 15:48:02 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-18 16:25:09
 * @Describe: 技术标签页面
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import utils from '../../utils';
import style from './index.scss';

export default class Tag extends React.Component {
	constructor(props) {
		super(props);
		utils.burry('技术标签');
	}

	render() {
		return <div>Tag</div>;
	}
}
