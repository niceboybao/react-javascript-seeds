/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-11 15:20:08 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-14 16:14:07
 * @Describe: Team1 一个经典的react-redux-saga流程组件(API注释尽量写在此组件下)
 */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import utils from '../../../utils';
import { CounterDisplay } from '../../../components/Demos/CounterDisplay';
import { CounterControl } from '../../../components/Demos/CounterControl';
//import css,scss 模块化
import style from './style.scss';

//dispatch action
import { increment, decrement, initment, requestData } from './actions';

// import { dataSelector, countSelector } from './selectors';



const mapStateToProps = (state) => {
	return {
		data: state.team1Reducer.getData,
		counter: state.team1Reducer.count
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		//计数器+
		counterPlusOne: () => {
			console.log("call from 'mapDispatchToProps'");
			dispatch(increment(1));
		},
		//计数器-
		counterMinusOne: () => {
			console.log("call from 'mapDispatchToProps'");
			dispatch(decrement(1));
		},
		//初始化计数器
		counterInit: () => {
			dispatch(initment(0));
		},
		//获取数据
		getData: () => {
			dispatch(requestData());
		}
	};
};

class Team1 extends React.Component {
	constructor(props) {
		super(props);
		utils.burry('Team1');

		this.state = {
			name: '点我改变state',
			age: 3,
			from: 'USA'
		};

		this.counterInit = this.counterInit.bind(this);
		this.changeState = this.changeState.bind(this);
	}
	// 设置默认的props，也可以用dufaultProps设置组件的默认属性。
	//    getDefaultProps() {
	//        console.log("Team1 component getDefaultProps");
	//    }
	// 在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props。
	//    getInitialState() {
	//        console.log("Team1 component getInitialState");
	//    }
	// Team1组件初始化时调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state
	componentWillMount() {
		console.log('Team1 component componentWillMount');
	}
	// 组件渲染之后调用，可以通过this.getDOMNode()获取和操作dom节点，只调用一次
	componentDidMount() {
		console.log('Team1 component componentDidMount');
		//获取接口数据
		this.props.getData();
	}
	// 组件初始化时不调用，组件接受新的props时调用。
	componentWillReceiveProps(nextPropsy) {
		console.log('Team1 component componentWillReceivePorps');
	}
	/*
     * react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，
     * 如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，
     * 节省大量性能，尤其是在dom结构复杂的时候。不过调用this.forceUpdate会跳过此步骤。
     */
	//组件接受新的state或者props时调用
	shouldComponentUpdate(nextProps, nextState) {
		console.log('Team1 component shouldComponentUpdate');
		// 短路运算  &&->一false短路,||->一true短路
		// if (this.props.counter !== nextProps.counter || this.state.name !== nextState.name) {
		// 	console.log('dom改变了刷新');
		// 	return true;
		// } else {
		// 	console.log('dom没改变不刷新');
		// 	return false;
		// }
		return true;
	}
	// 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
	componentWillUpdate(nextProps, nextState) {
		console.log('Team1 component componentWillUpdate');
	}
	// 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。
	componentDidUpdate() {
		console.log('Team1 component componentDidUpdate');
	}
	// 组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
	componentWillUnmount() {
		console.log('Team1 component componentWillUnmount');
	}

	//初始化计时器方法
	counterInit() {
		this.props.counterInit();
	}

	//改变state
	changeState() {
		this.setState(
			{
				name: '已改变state'
			},
			() => {
				console.log('改变state: ' + this.state.name);
			}
		);
	}

	render() {
		//react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了
		const { counter, counterPlusOne, counterMinusOne, data } = this.props;
		console.log('Team1 render');
		return (
			<div id={style.team1}>
				<div className={style.content1} id="content_display_area">
					<CounterDisplay counter={counter} />
					<CounterControl onPlusClick={counterPlusOne} onMinusClick={counterMinusOne} />
					<div className={style.initCount} onClick={this.counterInit}>
						重置计数器
					</div>
					<div className={style.initCount} onClick={this.changeState}>
						{this.state.name}
					</div>
					{typeof data.busiCode !== 'undefined' && (
						<div className={style.table}>
							<div>{data.busiCode}</div>
						</div>
					)}
					<Link to={'/exception/500'}>
						<div>接口500测试</div>
					</Link>
					<Link to={'/exception/401'}>
						<div>接口403权限问题</div>
					</Link>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Team1);
