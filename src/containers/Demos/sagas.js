/*
 * @Author: guangwei.bao 
 * @Date: 2018-10-31 10:13:49 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-10-31 10:46:12
 * @Describe: 无
 */

import { call, put, takeEvery } from 'redux-saga/effects';
// 用于Node和Browserify的同构WHATWG Fetch API
import fetch from 'isomorphic-fetch';

import { GETMENULIST } from './constants';
import { getMenuListSuccess, getMenuListError } from './actions';

function* fetchData(action) {
	try {
		const response = yield call(fetch, '../../mock/demo/menuList.json');
		if (response.ok) {
			const json = yield response.json();
			console.log(' demo getMenuListSuccess');
			// put是saga对Redux中dispatch方法的一个封装
			yield put(getMenuListSuccess(json));
		} else {
			console.log('demo getMenuListError');
			yield put(getMenuListError(response.status));
		}
	} catch (e) {
		console.log('demo getMenuListFaild');
		yield put(getMenuListError(e.message));
	}
}

export default function* saga() {
	yield takeEvery(GETMENULIST, fetchData);
}
