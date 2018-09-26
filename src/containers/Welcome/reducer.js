/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-21 16:16:46 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-26 17:17:39
 * @Describe: 无
 */
import { handleActions } from 'redux-actions';

import { GETLOCATION, GETWEATHERSUCCESS, GETWEATHERERROR } from './constants';

import { RN_WELCOME } from '../../store/constants';

export const name = RN_WELCOME;

export const welcomeReducer = handleActions(
	{
		// 地理位置
		[GETLOCATION]: (state, action) => {
			return Object.assign({}, state, {
				location: action.payload
			});
		},
		// 天气api数据
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
