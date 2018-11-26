/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-05 20:10:44 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-11-26 18:02:37
 * @Describe: 工程入口文件
 */

// https://www.npmjs.com/package/react-hot-loader
import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import * as log from 'loglevel';

// import components
import createReducer from './store/reducers';
import rootSaga from './store/sagas';
import RootContainer from './containers/RootContainer';
// import { HEMPConfig } from './config';
const CommonConfig = require('../config/');

// import css
// import '!style-loader!css-loader!antd/dist/antd.min.css';
import './styles/global.css';
import './styles/index.css';

// init hempConfig
// window.hempConfig = new HEMPConfig();

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// set log level
// 将给定级别的事物（trace / debug / info / warn / error）记录到控制台对象（如所有现代浏览器和node.js中所示）
// log.trace(msg)  0
// log.debug(msg)  1
// log.info(msg)   2
// log.warn(msg)   3
// log.error(msg)  4
if (process.env.NODE_ENV === 'production') {
	log.setLevel('info');
	log.debug('process.env.NODE_ENV = production');
} else {
	log.setLevel('debug');
	log.debug('process.env.NODE_ENV = development');
}

// override console.log
console.log = (message, ...objs) => {
	let a = log.getLevel();
	let b = log.levels.DEBUG;

	if (log.getLevel() <= log.levels.DEBUG) {
		console.groupCollapsed(message, ...objs);
		console.trace('stack trace');
		console.groupEnd();
	} else {
		log.debug(message, ...objs);
	}
};

// // js中关闭console.log日志的方法
// window.isDebugger = false; //false为生产模式，true为调试模式
// console.log = (function(oriLogFunc) {
// 	return function(str) {
// 		if (window.isDebugger) {
// 			oriLogFunc.call(console, str);
// 		}
// 	};
// })(console.log);

// Create router basename
// basename:路由所有位置的基本URL
let appBase = '/' + CommonConfig.PACKAGE_PATH;
// const basepath = window.location.href.match(/\/\/([^\/]*)\/(.*)\/dist/);
// if (basepath !== undefined && basepath !== null && basepath.length == 3) {
// 	// 部署到自己的域名下时，动态拼接域名下的工程文件夹
// 	appBase = '/' + basepath[2] + appBase;
// }
// Create a history
const history = createBrowserHistory({ basename: appBase });
// Create react-router-redux middleware
const reduxRouterMiddleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(
	createReducer(undefined),
	// 使用applyMiddleware函数将创建的saga Middleware实例绑定到store上
	composeEnhancers(applyMiddleware(sagaMiddleware, reduxRouterMiddleware))
);

//sagaMiddleware的run函数来执行某个或者某些Middleware
sagaMiddleware.run(rootSaga);

// update window
window.store = store;
window.sagaMiddleware = sagaMiddleware;

ReactDOM.render(
	<AppContainer>
		<Provider store={store}>
			<BrowserRouter basename={appBase}>
				<RootContainer />
			</BrowserRouter>
		</Provider>
	</AppContainer>,
	document.getElementById('root')
);
