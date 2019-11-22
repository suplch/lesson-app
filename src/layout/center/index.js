import React from 'react';

import { Layout } from 'antd';

import PathBreadcrumb from './PathBreadcrumb';

import LeftMenu from './LeftMenu';
import {connect} from "react-redux";

const { Content } = Layout;

export class Index extends React.Component {

    render() {
        const Component = this.props.currentItem.comp;
        const instance = Component ? <Component/> : null;
        return (
            <Content style={{ padding: '0 50px' }}>
                <PathBreadcrumb />
                <Layout style={{
                    position: 'absolute',
                    top: '24px',
                    left: '24px',
                    right: '24px',
                    bottom: '0px',
                    background: '#fff'}}>

                    <LeftMenu />
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <div style={{ width: '100%', height: '100%'}}>
                            {instance}
                        </div>
                    </Content>
                </Layout>
            </Content>
        );
    }
}


function mapStateToProps (state) {
    return {
        currentItem: state.nav.currentItem
    }
}

function mapDispatchToProps (dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
