/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-21 16:16:46 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-21 17:59:03
 * @Describe: 无
 */
import { handleActions } from 'redux-actions';

import { GETLOCATION, GETLOCATIONSUCCESS, GETLOCATIONERROR } from './constants';

import { RN_WELCOME } from '../../store/constants';

export const name = RN_WELCOME;

export const welcomeReducer = handleActions(
	{
		[GETLOCATION]: (state, action) => {
			return Object.assign({}, state, {
				location: action.payload
			});
		},
		[GETLOCATIONSUCCESS]: (state, action) => {
			return Object.assign(
				{},
				state,
				{
					// location: action.payload
				}
			);
		},
		[GETLOCATIONERROR]: (state, action) => {
			return Object.assign({}, state, {});
		}
	},
	{
		location: {}
	}
);
