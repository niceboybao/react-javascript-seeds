/*
 * @Author: guangwei.bao 
 * @Date: 2018-10-29 11:26:19 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-10-31 11:33:37
 * @Describe: Demo 整体框架
 */
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { createRoutes } from '../../store/router';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import utils from '../../utils';
import Team1 from './Team1';
import style from './index.scss';

//dispatch action
import { getMenuList } from './actions';

const mapStateToProps = (state) => {
	return {
		menuData: state.demoReducer.menuData
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		//获取数据
		menuListData: () => {
			dispatch(getMenuList());
		}
	};
};

class Demo extends React.Component {
	constructor(props) {
		super(props);
		// utils.burry('Demo');

		this.allRoutes = createRoutes();
		// 和渲染无关的状态尽量不要放在 state 中来管理
		this.demoIndex = 0;
		this.state = {
			collapsed: false
		};
		this.onCollapse = this.onCollapse.bind(this);
		this.getPathname = this.getPathname.bind(this);
	}

	componentDidMount() {
		//获取接口数据
		this.props.menuListData();
	}

	generateRoutes = () => {
		this.allRoutes.push({
			path: '/demo',
			exact: true, //true 表示严格匹配 false 正常匹配
			component: Team1,
			level: 2
		});
		return this.allRoutes.map((route, index) => {
			// 过滤掉一级路由 和不属于demo的二级路由
			if (route.level === 2 && route.path.indexOf('demo') >= 0) {
				// 严格匹配
				if (route.exact) {
					return <Route key={'route_' + index} exact path={route.path} component={route.component} />;
				} else {
					return <Route key={'route_' + index} path={route.path} component={route.component} />;
				}
			}
		});
	};

	onCollapse = (collapsed) => {
		console.log(collapsed);
		this.setState({ collapsed });
	};

	// 路由层级
	getPathname(data, path) {
		for (let i = 0; i < data.length; i++) {
			if (data[i].link === path) {
				this.demoIndex = i;
				break;
			}
		}
		return path.substr(1).split('/');
	}
	render() {
		const { location, menuData } = this.props;
		const routes = this.generateRoutes();

		const pathname = this.getPathname(menuData, location.pathname);

		return (
			<div id={style.demo}>
				<Layout style={{ minHeight: '100vh', height: '100%' }}>
					<Sider
						collapsible
						collapsed={this.state.collapsed}
						onCollapse={this.onCollapse}
						style={{ overflowY: 'auto' }}
					>
						<div className={style.logo} />
						{utils.isNotEmpty(menuData) && (
							<Menu theme="dark" defaultSelectedKeys={[ this.demoIndex + '' ]} mode="inline">
								{menuData.map((item, index) => (
									<Menu.Item key={index + ''}>
										<Link to={item.link}>
											<Icon type={item.type} />
											<span>{item.text}</span>
										</Link>
									</Menu.Item>
								))}
							</Menu>
						)}
					</Sider>
					{!utils.isNotEmpty(menuData) && (
						<div className={style['loading-div']}>
							<Icon type="loading" theme="outlined" className={style.icon} />
						</div>
					)}

					{utils.isNotEmpty(menuData) && (
						<Layout>
							<Header className={style['ant-layout-header']}>
								<span className={style.describe}>
									<span className={style.weight}>描述： </span>
									{menuData[this.demoIndex].title}
								</span>
								<span className={style.describe}>
									<span className={style.weight}>完成时间： </span>
									{menuData[this.demoIndex].date}
								</span>
							</Header>
							<Content style={{ margin: '0 16px' }}>
								<Breadcrumb style={{ margin: '16px 16px' }}>
									{pathname.map((item, index) => (
										<Breadcrumb.Item key={index + ''}>{item}</Breadcrumb.Item>
									))}
								</Breadcrumb>
								<div style={{ padding: 24, background: '#fff', minHeight: 500 }}>
									<Switch>{routes}</Switch>
								</div>
							</Content>
							<Footer style={{ textAlign: 'center' }}>demo bloge ©2018 Created by guangwei.bao</Footer>
						</Layout>
					)}
				</Layout>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
