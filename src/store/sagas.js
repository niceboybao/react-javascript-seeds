/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-10 15:01:57 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-21 16:41:14
 * @Describe: 工程sagas 入口文件
 */
'use strict';

import { all, fork } from 'redux-saga/effects';

// import component
import welcomeSaga from '../containers/Welcome/sagas';

// demo
import team1Saga from '../containers/Demos/Team1/sagas';

export default function* rootSaga() {
	yield all([ fork(team1Saga), fork(welcomeSaga) ]);
}
