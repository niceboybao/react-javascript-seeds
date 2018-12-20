/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-19 18:38:47 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-12-20 10:51:45
 * @Describe: 链接组件
 */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as log from 'loglevel';

import utils from '../../../utils';
import style from './index.scss';

export default class Links extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <span id={style.links}>Links</span>;
	}
}
