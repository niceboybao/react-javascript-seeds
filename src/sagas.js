import { all, fork } from 'redux-saga/effects';

//各个组件的sagas
import sagaTeam1 from './containers/Team1/sagas';

export default function* rootSaga() {
	yield all([ fork(sagaTeam1) ]);
}
