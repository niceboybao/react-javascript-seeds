/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-18 22:32:41 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-10-31 10:16:14
 * @Describe: 无
 */
import { createAction, Action } from 'redux-actions';
import { INCREMENT, DECREMENT, INITMENT, REQUESTDATA, REQUESTDATASUCCESS, REQUESTDATAERROR } from './constants';

//计数器方法
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const initment = createAction(INITMENT);

//获取书籍
export const requestData = createAction(REQUESTDATA);
export const requestDataSuccess = createAction(REQUESTDATASUCCESS);
export const requestDataError = createAction(REQUESTDATAERROR);
