/*
 * @Author: guangwei.bao 
 * @Date: 2018-10-31 10:13:17 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-10-31 10:43:40
 * @Describe: 无
 */
import { createAction, Action } from 'redux-actions';
import { GETMENULIST, GETMENULISTSUCCESS, GETMENULISTERROR } from './constants';

// 获取demo列表数据
export const getMenuList = createAction(GETMENULIST);
export const getMenuListSuccess = createAction(GETMENULISTSUCCESS);
export const getMenuListError = createAction(GETMENULISTERROR);
