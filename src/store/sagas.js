/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-10 15:01:57 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-12-12 15:59:42
 * @Describe: 工程sagas 入口文件
 */
'use strict';

import { all, fork } from 'redux-saga/effects';

// import component
import welcomeSaga from '../containers/Welcome/sagas';
import articleSaga from '../containers/Article/sagas';

// demo
import demoSaga from '../containers/Demos/sagas';
import team1Saga from '../containers/Demos/Team1/sagas';

export default function* rootSaga() {
	yield all([ fork(welcomeSaga), fork(articleSaga), fork(demoSaga), fork(team1Saga) ]);
}
