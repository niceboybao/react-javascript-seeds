/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-11 18:04:46 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-12 10:25:22
 * @Describe: 路由配置入口组件
 */
import React, { Component } from 'react';
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { connect, MapStateToProps } from 'react-redux';

import createRoutes from '../../store/router';

// const { SubMenu } = Menu;
// const { Header, Content, Sider, Footer } = Layout;

export default class RootContainer extends Component {
	constructor(props) {
		super(props);
		console.log('RootContainer');

		this.state = {};
		this.allRoutes = createRoutes();
		this.generateRoutes = this.generateRoutes.bind(this);
	}

	generateRoutes = () => {
		return this.allRoutes.map((route, index) => {
			if (route.exact) {
				return <Route key={'route_' + index} exact path={route.path} component={route.component} />;
			} else {
				return <Route key={'route_' + index} path={route.path} component={route.component} />;
			}
		});
	};

	render() {
		const routes = this.generateRoutes();
		return (
			<Switch>
				{/*router dom*/}
				{routes}
			</Switch>
		);
	}
}
