/*
 * @Author: guangwei.bao 
 * @Date: 2018-10-31 10:14:01 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-10-31 11:10:30
 * @Describe: 无
 */

import { handleActions } from 'redux-actions';

// 最外层constants 统一命名
import { RN_DEMO } from '../../store/constants';
//组件的 constants
import { GETMENULISTSUCCESS, GETMENULISTERROR } from './constants';

export const name = RN_DEMO;

export const demoReducer = handleActions(
	{
		//获取数据方法
		[GETMENULISTSUCCESS]: (state, action) => {
			return Object.assign({}, state, {
				menuData: action.payload
			});
		},
		[GETMENULISTERROR]: (state, action) => {
			return Object.assign({}, state, {});
		}
	},
	{
		menuData: []
	}
);
