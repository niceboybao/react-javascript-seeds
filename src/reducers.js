import { combineReducers } from 'redux';
import { createAction, handleActions, Action } from 'redux-actions';
import { routerReducer } from 'react-router-redux';

//组件render引入
import { team1Reducer, name as team1ReducerName } from './containers/Team1/reducer';

import { RN_ROUTER } from './constants';

// export const appReducers = combineReducers({
//     router: routerReducer,
//     teamCounter: counterReducer,
//     httpQuery: httpReducer,
// });

export default function createReducer() {
	return combineReducers({
		[RN_ROUTER]: routerReducer,
		[team1ReducerName]: team1Reducer,
		...asyncReducers
	});
}
