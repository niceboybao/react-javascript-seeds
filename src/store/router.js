/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-10 15:03:28 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-30 17:14:14
 * @Describe: 组件路由配置
 */
'use strict';

// import component
import Exception from '../containers/Exception';
import Welcome from '../containers/Welcome';
import Tag from '../containers/Tag';
import Home from '../containers/Home';
import About from '../containers/About';

// demo
import Team1 from '../containers/Demos/Team1';
import Team2 from '../containers/Demos/Team2';
import Team3 from '../containers/Demos/Team3';
import Team4 from '../containers/Demos/Team4';

export default function createRoutes() {
	return [
		// default router
		{
			path: '/',
			exact: true, //true 表示严格匹配 false 正常匹配
			component: Welcome
		},
		// welcome 首页
		{
			path: '/welcome',
			exact: true, //true 表示严格匹配 false 正常匹配
			component: Welcome
		},
		// 技术标签
		{
			path: '/tag',
			exact: true, //true 表示严格匹配 false 正常匹配
			component: Tag
		},
		// 个人中心
		{
			path: '/home',
			exact: true, //true 表示严格匹配 false 正常匹配
			component: Home
		},
		// 关于我
		{
			path: '/about',
			exact: true, //true 表示严格匹配 false 正常匹配
			component: About
		},

		// demo
		{
			path: '/demo',
			exact: true, //true 表示严格匹配 false 正常匹配
			component: Team1
		},
		{
			path: '/demo/team1',
			component: Team1
		},
		{
			path: '/demo/team2',
			component: Team2
		},
		{
			path: '/demo/team3',
			component: Team3
		},
		{
			path: '/demo/team4',
			component: Team4
		},

		// Exception
		{
			path: '/exception/:id',
			component: Exception
		},
		// when none of the above match, <Exception> will be rendered
		{
			path: '*',
			component: Exception
		}

		// {
		// 	path: '/',
		// 	component: Welcome,
		// 	exact: true //true 表示严格匹配 false 正常匹配
		// 	//false的情况下 /user会把/的路由组件展示出来
		// },
		// {
		// 	path: '/user/tom',
		// 	component: Tom
		// },
		// {
		// 	path: '/user/bill',
		// 	component: Bill
		// },
		// {
		// 	path: '/user/alex',
		// 	render: () => {
		// 		//按需加载???
		// 		return <Bundle load={Promise.all([ _import('./containers/Alex') ])} />;
		// 	}
		// },
		// {
		// 	path: '/team/team1',
		// 	component: Team1
		// }
	];

	// const chooseProducts = (location, cb) => {
	//     require.ensure([], require => {
	//         cb(null, require('../Component/chooseProducts').default)
	//     },'chooseProducts')
	// }
	//
	// const helpCenter = (location, cb) => {
	//     require.ensure([], require => {
	//         cb(null, require('../Component/helpCenter').default)
	//     },'helpCenter')
	// }
	//
	// const saleRecord = (location, cb) => {
	//     require.ensure([], require => {
	//         cb(null, require('../Component/saleRecord').default)
	//     },'saleRecord')
	// }
	//
	// const RouteConfig = (
	//     <Router history={history}>
	//         <Route path="/" component={Roots}>
	//             <IndexRoute component={index} />//首页
	//             <Route path="index" component={index} />
	//             <Route path="helpCenter" getComponent={helpCenter} />//帮助中心
	//             <Route path="saleRecord" getComponent={saleRecord} />//销售记录
	//             <Redirect from='*' to='/'  />
	//         </Route>
	//     </Router>
	// );
}
