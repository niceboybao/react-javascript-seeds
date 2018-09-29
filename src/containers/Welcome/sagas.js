/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-21 15:51:49 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-27 00:45:49
 * @Describe: 无
 */
import { take, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
// 用于Node和Browserify的同构WHATWG Fetch API
// import fetch from 'isomorphic-fetch';
import utils from '../../utils';
import { configClient } from '../../config.js';

import { GETWEATHER } from './constants';
import { getWeatherSuccess, getWeatherError } from './actions';

// 获取天气API接口
function* fetchData1(action) {
	const url = 'https://free-api.heweather.com/v5/weather';
	const params = {
		key: configClient.weather_key,
		city: action.payload
		// city: '成都'
	};
	try {
		const api = () =>
			utils.fetch({
				url: url,
				params: params,
				method: 'GET'
			});
		const response = yield call(api);
		const json = response.HeWeather5[0];
		console.log(' welcome getWeatherSuccess');
		// put是saga对Redux中dispatch方法的一个封装
		yield put(getWeatherSuccess(json));
	} catch (e) {
		console.log('welcome getWeatherError');
		yield put(getWeatherError(e.message));
	}
}

export default function* saga() {
	yield takeEvery(GETWEATHER, fetchData1);
}
