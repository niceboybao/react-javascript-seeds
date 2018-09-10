import React, { Component } from 'react';
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { connect, MapStateToProps } from 'react-redux';

// import { NoMatch } from '../NoMatch';

import createRoutes from '../../store/router';

// const { SubMenu } = Menu;
// const { Header, Content, Sider, Footer } = Layout;

import NoMatch from '../NoMatch';
// import { Tom } from './containers/Tom';
// import { Bill } from './containers/Bill';
import Team1 from '../Demos/Team1';
import Team2 from '../Demos/Team2';

export default class RootContainer extends Component {
	constructor(props) {
		super(props);
		console.log('RootContainer');

		this.state = {};
		// this.allRoutes = createRoutes();
		// this.generateRoutes = this.generateRoutes.bind(this);
	}

	// generateRoutes = () => {
	// 	debugger;
	// 	return this.allRoutes.map((route, index) => {
	// 		<Route key={'ru_' + index} path={route.path} component={route.component} />;
	// 	});
	// };

	render() {
		// const routes = this.generateRoutes();

		return (
			// 所有位置的基本URL。如果您的应用程序是从服务器上的子目录提供的，则需要将其设置为子目录。
			// 格式正确的基本名称应该有一个前导斜杠，但没有尾部斜杠。
			<Router  basename="/www">
				<Switch>
					<Route exact path="/" component={Team1} />
					<Route path="/team2" component={Team2} />
				</Switch>
			</Router>
		);
	}
}
