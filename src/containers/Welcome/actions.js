/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-21 15:50:48 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-21 16:35:37
 * @Describe: 无
 */
import { createAction, Action } from 'redux-actions';

import { GETLOCATION, GETLOCATIONSUCCESS, GETLOCATIONERROR } from './constants';

export const getLocation = createAction(GETLOCATION);
export const getLocationSuccess = createAction(GETLOCATIONSUCCESS);
export const getLocationError = createAction(GETLOCATIONERROR);
