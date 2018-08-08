import React from 'react';
import { Breadcrumb } from 'antd';
import { RouteComponentProps } from 'react-router-dom';

import { Clock } from '../../components/Clock';

export class Welcome extends React.Component {
	componentDidMount() {
		document.getElementById('content_display_area').style.height =
			(document.getElementsByClassName('ant-layout-content')[0].offsetHeight - 42).toString() + 'px';
	}

	render() {
		return (
			<div>
				<Breadcrumb style={{ margin: '12px 0' }}>
					<Breadcrumb.Item>Welcome</Breadcrumb.Item>
				</Breadcrumb>
				<div id="content_display_area" style={{ padding: 24, background: '#fff', minHeight: 360 }}>
					<Clock />
				</div>
			</div>
		);
	}
}
