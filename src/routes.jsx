import React from 'react';
import { Welcome } from './containers/Welcome';
import { NoMatch } from './containers/NoMatch';
import { Tom } from './containers/Tom';
import { Bill } from './containers/Bill';
import Team1 from './containers/Team1';

import Bundle from './utils/Bundle';

export default function createRoutes() {
	return [
		{
			path: '/',
			component: Welcome,
			exact: true //true 表示严格匹配 false 正常匹配
			//false的情况下 /user会把/的路由组件展示出来
		},
		{
			path: '/user/tom',
			component: Tom
		},
		{
			path: '/user/bill',
			component: Bill
		},
		{
			path: '/user/alex',
			render: () => {
				//按需加载???
				return <Bundle load={Promise.all([ _import('./containers/Alex') ])} />;
			}
		},
		{
			path: '/team/team1',
			component: Team1
		}
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
