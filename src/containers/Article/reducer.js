/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-21 16:16:46 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-12-12 16:03:54
 * @Describe: 无
 */
import { handleActions } from 'redux-actions';

import { GETARTICLESUCCESS, GETARTICLERERROR } from './constants';

import { RN_ARTICLE } from '../../store/constants';

export const name = RN_ARTICLE;

export const articleReducer = handleActions(
	{
		// 获取文章数据
		[GETARTICLESUCCESS]: (state, action) => {
			return Object.assign({}, state, {
				articleDate: action.payload
			});
		},
		[GETARTICLERERROR]: (state, action) => {
			return Object.assign({}, state, {});
		}
	},
	{
		articleDate: {}
	}
);
