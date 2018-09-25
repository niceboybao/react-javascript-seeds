/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-21 15:51:49 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-25 19:27:48
 * @Describe: 无
 */
import { take, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
// 用于Node和Browserify的同构WHATWG Fetch API
// import fetch from 'isomorphic-fetch';
import utils from '../../utils';

import { GETWEATHER } from './constants';
import { getWeatherSuccess, getWeatherError } from './actions';

// 获取天气API接口
function* fetchData1() {
	const url = 'https://free-api.heweather.com/v5/weather?key=19713447578c4afe8c12a351d46ea922&city=郑州市';
	// const params = {};
	try {
		const api = () => utils.fetch(url, 'GET');
		const response = yield call(api);
		if (response.ok) {
			const json = yield response.json();
			console.log(' welcome getWeatherSuccess');
			// put是saga对Redux中dispatch方法的一个封装
			yield put(getWeatherSuccess(json));
		} else {
			console.log('welcome getWeatherError');
			yield put(getWeatherError(response.status));
		}
	} catch (e) {
		console.log('welcome getWeatherFaild');
		yield put(getWeatherError(e.message));
	}
}

export default function* saga() {
	yield takeEvery(GETWEATHER, fetchData1);
}
