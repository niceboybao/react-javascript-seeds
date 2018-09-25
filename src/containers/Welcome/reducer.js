/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-21 16:16:46 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-25 14:43:20
 * @Describe: 无
 */
import { handleActions } from 'redux-actions';

import { GETLOCATION, GETWEATHERSUCCESS, GETWEATHERERROR } from './constants';

import { RN_WELCOME } from '../../store/constants';

export const name = RN_WELCOME;

export const welcomeReducer = handleActions(
	{
		[GETLOCATION]: (state, action) => {
			return Object.assign({}, state, {
				location: action.payload
			});
		},
		// [GETLOCATIONSUCCESS]: (state, action) => {
		// 	return Object.assign(
		// 		{},
		// 		state,
		// 		{
		// 			// location: action.payload
		// 		}
		// 	);
		// },
		// [GETLOCATIONERROR]: (state, action) => {
		// 	return Object.assign({}, state, {});
		// },

		[GETWEATHERSUCCESS]: (state, action) => {
			return Object.assign({}, state, {
				weather: action.payload
			});
		},
		[GETWEATHERERROR]: (state, action) => {
			return Object.assign({}, state, {});
		}
	},
	{
		location: {},
		weather: {}
	}
);
