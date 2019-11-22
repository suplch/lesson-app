import React from 'react';

import { Breadcrumb } from 'antd';


export default class Index extends React.Component {

    render() {
        return (
            <Breadcrumb style={{ position: 'absolute', top: '0px', left: '24px', right: '24px', height: '20px' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}
