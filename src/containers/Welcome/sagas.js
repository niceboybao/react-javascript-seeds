/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-21 15:51:49 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-12-12 16:29:26
 * @Describe: 无
 */
import { take, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
// 用于Node和Browserify的同构WHATWG Fetch API
// import fetch from 'isomorphic-fetch';
import * as log from 'loglevel';
import utils from '../../utils';
import config from '../../config.js';

import { GETWEATHER } from './constants';
import { getWeatherSuccess, getWeatherError } from './actions';

// 获取天气API接口
function* fetchData1(action) {
	const params = {
		key: config.WEATHER_KEY,
		city: action.payload
		// city: '成都'
	};
	try {
		const api = () =>
			utils.getJson({
				url: config.WEATHER_BASE_PATH,
				params: params,
				method: 'GET'
			});
		const response = yield call(api);
		const json = response.HeWeather5[0];
		log.debug(' welcome getWeatherSuccess');
		// put是saga对Redux中dispatch方法的一个封装
		yield put(getWeatherSuccess(json));
	} catch (e) {
		log.debug('welcome getWeatherFaild');
		yield put(getWeatherError(e.message));
	}
}

export default function* saga() {
	yield takeEvery(GETWEATHER, fetchData1);
}
