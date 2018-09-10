/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-05 20:10:44 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-10 23:03:04
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
import { Router, Route, hashHistory, IndexRoute } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import * as log from 'loglevel';

// import components
import createReducer from './store/reducers';
import rootSaga from './store/sagas';
import RootContainer from './containers/RootContainer';
// import { HEMPConfig } from './config';

// import css
// import '!style-loader!css-loader!antd/dist/antd.min.css';
import './styles/global.css';
import './styles/app.css';

// init hempConfig
// window.hempConfig = new HEMPConfig();

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// set log level
if (process.env.NODE_ENV === 'production') {
	console.log('process.env.NODE_ENV = production');
	log.setLevel('info');
} else {
	console.log('process.env.NODE_ENV = development');
	log.setLevel('debug');
}

// Create a history
// let appBase = '/www';
// let basepath = window.location.href.match(/\/\/([^\/]*)\/(.*)\/www/);
// if (basepath !== undefined && basepath !== null && basepath.length == 3) {
// 	appBase = '/' + basepath[2] + appBase;
// }
// const history = createBrowserHistory({ basename: appBase });
const history = createBrowserHistory({ basename: '/www' });

// Create react-router-redux middleware
const reduxRouterMiddleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(
	createReducer(undefined),
	//    使用applyMiddleware函数将创建的saga Middleware实例绑定到store上
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
			<RootContainer />
		</Provider>
	</AppContainer>,
	document.getElementById('root')
);
