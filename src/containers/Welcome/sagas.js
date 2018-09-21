/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-21 15:51:49 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-21 16:37:43
 * @Describe: 无
 */
import { take, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
// 用于Node和Browserify的同构WHATWG Fetch API
import fetch from 'isomorphic-fetch';

import { GETLOCATION } from './constants';
import { getLocationSuccess, getLocationError } from './actions';

function* fetchData1() {
	try {
		const response = yield call(fetch, '../../mock/welcome/test.json');
		if (response.ok) {
			const json = yield response.json();
			console.log(' welcome getLocationSuccess');
			// put是saga对Redux中dispatch方法的一个封装
			yield put(getLocationSuccess(json));
		} else {
			console.log('welcome getLocationError');
			yield put(getLocationError(response.status));
		}
	} catch (e) {
		console.log('welcome getLocationFaild');
		yield put(getLocationError(e.message));
	}
}

export default function* saga() {
	yield takeEvery(GETLOCATION, fetchData1);
}
