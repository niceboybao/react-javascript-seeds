/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-18 15:48:02 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-12-13 09:53:06
 * @Describe: 我的文章页面
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

let myMarked = require('marked'); // markdown文档解析插件
let highlight = require('highlight.js'); // highlight代码高亮
import 'highlight.js/styles/tomorrow.css'; // highlight css

// marked 属性选项
myMarked.setOptions({
	renderer: new myMarked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: false,
	smartLists: true,
	smartypants: false,
	highlight: function(code) {
		return highlight.highlightAuto(code).value;
	}
});

import utils from '../../utils';
import style from './index.scss';

import { getArticle } from './actions';

const mapStateToProps = (state) => {
	return {
		articleDate: state.articleReducer.articleDate
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// 获取文章数据
		getArticleDate: () => {
			dispatch(getArticle());
		}
	};
};

class Article extends React.Component {
	constructor(props) {
		super(props);
		utils.burry('我的文章');
	}

	componentWillMount() {}
	componentDidMount() {
		// 获取文章数据
		this.props.getArticleDate();
	}

	render() {
		const { articleDate } = this.props;
		let TY = '1';
		if (utils.isNotEmpty(articleDate)) {
			TY = myMarked(articleDate);
		}

		return (
			<div className={style.article}>
				<div id={style['markdown-body']} dangerouslySetInnerHTML={{ __html: TY }} />
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
