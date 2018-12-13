/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-21 15:50:48 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-12-12 15:44:39
 * @Describe: 无
 */
import { createAction, Action } from 'redux-actions';

import {
	GETARTICLE,
	GETARTICLESUCCESS,
	GETARTICLERERROR
} from './constants';

export const getArticle = createAction(GETARTICLE);
export const getArticleSuccess = createAction(GETARTICLESUCCESS);
export const getArticleError = createAction(GETARTICLERERROR);
