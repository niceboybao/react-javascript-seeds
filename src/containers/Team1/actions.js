import { createAction, Action } from 'redux-actions';
import {
	INCREMENT,
	DECREMENT,
	INITMENT,
	REQUESTDATA,
	REQUESTDATASUCCESS,
	REQUESTDATAERROR,
	REQUESTDATAFAILD
} from './constants';

//计数器方法
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const initment = createAction(INITMENT);

//获取书籍
export const requestData = createAction(REQUESTDATA);
export const requestDataSuccess = createAction(REQUESTDATASUCCESS);
export const requestDataError = createAction(REQUESTDATAERROR);
export const requestDataFaild = createAction(REQUESTDATAFAILD);
