/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-21 15:51:49 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-12-12 17:27:18
 * @Describe: 无
 */
import { take, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
// 用于Node和Browserify的同构WHATWG Fetch API
// import fetch from 'isomorphic-fetch';
import utils from '../../utils';
import config from '../../config.js';

import { GETARTICLE } from './constants';
import { getArticleSuccess, getArticleError } from './actions';

function* fetchData(action) {
	try {
		const api = () =>
			utils.getJson({
				url: 'https://niceboybao.com/static_res/markdown/react技术栈全家桶（总结及感悟）.md',
				method: 'GET',
				text: true // 不是json格式的接口返回数据
			});
		const response = yield call(api);
		// const json = response.HeWeather5[0];
		// put是saga对Redux中dispatch方法的一个封装
		yield put(getArticleSuccess(response));
	} catch (e) {
		yield put(getArticleError(e.message));
	}
}

export default function* saga() {
	yield takeEvery(GETARTICLE, fetchData);
}
