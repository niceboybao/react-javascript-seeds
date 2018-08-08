import React from 'react';
import { Breadcrumb } from 'antd';
import { RouteComponentProps } from 'react-router-dom';

export default class Alex extends React.Component {
	componentDidMount() {
		document.getElementById('content_display_area').style.height =
			(document.getElementsByClassName('ant-layout-content')[0].offsetHeight - 42).toString() + 'px';
	}

	render() {
		return (
			<div>
				<Breadcrumb style={{ margin: '12px 0' }}>
					<Breadcrumb.Item>User</Breadcrumb.Item>
					<Breadcrumb.Item>Alex</Breadcrumb.Item>
				</Breadcrumb>
				<div id="content_display_area" style={{ padding: 24, background: '#fff', minHeight: 360 }}>
					<h1>Alex is a car.</h1>
				</div>
			</div>
		);
	}
}
