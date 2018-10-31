/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-10 15:00:36 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-10-31 10:42:55
 * @Describe: 工程reducers 入口文件
 */
'use strict';

import { combineReducers } from 'redux';
import { createAction, handleActions, Action } from 'redux-actions';
import { routerReducer } from 'react-router-redux';

// import component
import { welcomeReducer, name as RN_WELCOME } from '../containers/Welcome/reducer';
// demo
import { demoReducer, name as RN_DEMO } from '../containers/Demos/reducer';
import { team1Reducer, name as RN_TEAM1 } from '../containers/Demos/Team1/reducer';

import { RN_ROUTER } from './constants';

export default function createReducer() {
	return combineReducers({
		[RN_ROUTER]: routerReducer,
		// component
		[RN_WELCOME]: welcomeReducer,
		// demo
		[RN_DEMO]: demoReducer,
		[RN_TEAM1]: team1Reducer
	});
}
