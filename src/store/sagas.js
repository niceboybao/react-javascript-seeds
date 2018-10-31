/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-10 15:01:57 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-10-31 10:36:28
 * @Describe: 工程sagas 入口文件
 */
'use strict';

import { all, fork } from 'redux-saga/effects';

// import component
import welcomeSaga from '../containers/Welcome/sagas';

// demo
import demoSaga from '../containers/Demos/sagas';
import team1Saga from '../containers/Demos/Team1/sagas';

export default function* rootSaga() {
	yield all([ fork(welcomeSaga), fork(demoSaga), fork(team1Saga) ]);
}
