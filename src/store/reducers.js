/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-10 15:00:36 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-10 15:50:16
 * @Describe: 工程reducers 入口文件
 */
'use strict';

import { combineReducers } from 'redux';
import { createAction, handleActions, Action } from 'redux-actions';
import { routerReducer } from 'react-router-redux';

//组件render引入
// import { team1Reducer, name as team1ReducerName } from './containers/Team1/reducer';

import { RN_ROUTER } from './constants';

export default function createReducer() {
	return combineReducers({
		[RN_ROUTER]: routerReducer,
		// [team1ReducerName]: team1Reducer,
		// ...asyncReducers
	});
}
