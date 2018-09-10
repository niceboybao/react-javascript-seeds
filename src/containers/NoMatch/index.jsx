/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-10 15:38:44 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-10 19:09:16
 * @Describe: 路由匹配不上的404页面
 */

import React from 'react';
// import { Breadcrumb } from 'antd';

export default class NoMatch extends React.Component {
	render() {
		return (
			<div>
				<h1>
					Page not found for <code>NoMatch</code>
				</h1>
			</div>
		);
	}
}
