/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-05 20:10:44 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-07 09:41:55
 * @Describe: 工程入口文件
 */

import React from 'react';
import ReactDOM from 'react-dom';
// import './styles/index.scss';
import './styles/index.css';

import style from "./styles/index.scss";

ReactDOM.render(
	<div className={style.div}>hello world</div>,
	document.getElementById('root')
)