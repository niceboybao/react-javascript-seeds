/*
 * @Author: guangwei.bao 
 * @Date: 2018-11-26 11:25:51 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-11-26 16:47:27
 * @Describe: flex布局实例
 */

import React from 'react';
import { connect } from 'react-redux';

import { Divider } from 'antd';
import utils from '../../../utils';
import style from './index.scss';

export default class Flex extends React.Component {
	constructor(props) {
		super(props);
		utils.burry('Flex');
	}

	render() {
		// dangerouslySetInnerHTML 听说这个单词这么长，是故意的，应为有可能不合时宜的使用innerHTML会导致XSS攻击
		return (
			<div id={style['my-flex']}>
				{/* 一项目 */}
				<p>一格子项目</p>
				<div className={style.a1}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.a2}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.a3}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.a4}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.a5}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.a6}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.a7}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.a8}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.a9}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>

				{/* 二项目 */}
				<p>二格子项目</p>
				<div className={style.b1}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.b2}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.b3}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.b4}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.b5}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.b6}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.b7}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.b8}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.b9}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>

				{/* 3项目 */}
				<p>3格子项目</p>
				<div className={style.c1}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.c2}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.c3}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>

				{/* 4项目 */}
				<p>4格子项目</p>
				<div className={style.d1}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.d2}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.d3}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.d4}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.d5}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.d6}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.column}>
							<div className={style.com_item + ' ' + style.item} />
							<div className={style.com_item + ' ' + style.item} />
						</div>
						<div className={style.column}>
							<div className={style.com_item + ' ' + style.item} />
							<div className={style.com_item + ' ' + style.item} />
						</div>
					</div>
				</div>
				<div className={style.d7}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.column}>
							<div className={style.com_item + ' ' + style.item} />
							<div className={style.com_item + ' ' + style.item} />
						</div>
						<div className={style.column}>
							<div className={style.com_item + ' ' + style.item} />
							<div className={style.com_item + ' ' + style.item} />
						</div>
					</div>
				</div>

				{/* 5项目 */}
				<p>5格子项目</p>
				<div className={style.e1}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.column}>
							<div className={style.com_item + ' ' + style.item} />
							<div className={style.com_item + ' ' + style.item} />
						</div>
						<div className={style.column}>
							<div className={style.com_item + ' ' + style.item} />
						</div>
						<div className={style.column}>
							<div className={style.com_item + ' ' + style.item} />
							<div className={style.com_item + ' ' + style.item} />
						</div>
					</div>
				</div>

				{/* 6项目 */}
				<p>6格子项目</p>
				<div className={style.f1}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.f2}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.f3}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.f4}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
				<div className={style.f5}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.column}>
							<div className={style.com_item + ' ' + style.item} />
							<div className={style.com_item + ' ' + style.item} />
							<div className={style.com_item + ' ' + style.item} />
						</div>
						<div className={style.column}>
							<div className={style.com_item + ' ' + style.item} />
						</div>
						<div className={style.column}>
							<div className={style.com_item + ' ' + style.item} />
							<div className={style.com_item + ' ' + style.item} />
						</div>
					</div>
				</div>

				{/* 7项目 */}
				<p>7格子项目</p>

				{/* 8项目 */}
				<p>8格子项目</p>

				{/* 9项目 */}
				<p>9格子项目</p>
				<div className={style.i1}>
					<div className={style.com_box + ' ' + style.box}>
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
						<div className={style.com_item + ' ' + style.item} />
					</div>
				</div>
			</div>
		);
	}
}
