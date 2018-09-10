/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-10 15:01:57 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-10 15:07:16
 * @Describe: 工程sagas 入口文件
 */
'use strict';

import { all, fork } from 'redux-saga/effects';

//各个组件的sagas
// import sagaTeam1 from './containers/Team1/sagas';

export default function* rootSaga() {
	// yield all([ fork(sagaTeam1) ]);
}
