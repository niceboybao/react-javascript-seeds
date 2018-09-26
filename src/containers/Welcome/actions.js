/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-21 15:50:48 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-26 16:17:44
 * @Describe: 无
 */
import { createAction, Action } from 'redux-actions';

import {
	// 地理位置
	GETLOCATION,
	// 天气
	GETWEATHER,
	GETWEATHERSUCCESS,
	GETWEATHERERROR
} from './constants';

// 地理位置
export const getLocation = createAction(GETLOCATION);
// 天气
export const getWeather = createAction(GETWEATHER);
export const getWeatherSuccess = createAction(GETWEATHERSUCCESS);
export const getWeatherError = createAction(GETWEATHERERROR);
