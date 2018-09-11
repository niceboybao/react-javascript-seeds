/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-10 15:38:44 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-11 14:53:44
 * @Describe: 路由匹配不上的404页面
 */

import React from 'react';
// import { Breadcrumb } from 'antd';

export default class NoMatch extends React.Component {
	render() {
		return (
			<div>
				<h1>
					找不到路径为{location.pathname}的页面
				</h1>
			</div>
		);
	}
}
