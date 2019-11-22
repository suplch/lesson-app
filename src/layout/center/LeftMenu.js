import React from 'react';

import { Layout, Menu, Icon } from 'antd';
import {connect} from "react-redux";

const { SubMenu } = Menu;
const { Sider } = Layout;

class LeftMenu extends React.Component {
    render() {
        console.log(this.props);

        const { menus } = this.props.currentLesson;
        const choiceItem = this.props.choiceItem;

        let i = 1;
        const menusEls = menus.map((menu) => {

            const titleEl = (
                <span>
                    <Icon type="user" /> {menu.text}
                </span>
            );

            const itemEls = menu.items.map((item) => {
                return (
                    <Menu.Item key={i++} onClick={() => {choiceItem(item)}}>{item.text}</Menu.Item>
                );
            });

            return (
                <SubMenu key={menu.name} title={titleEl} >
                    {itemEls}
                </SubMenu>
            );
        });

        return (
            <Sider width={200} style={{ background: '#fff', overflow: 'auto' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}>

                        {menusEls}
                    </Menu>
                </Sider>
        );
    }
}

function mapStateToProps (state) {
    return {
        currentLesson: state.nav.currentLesson,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        choiceItem(item) {
            dispatch({type: 'switchItem', payload: {item}});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu)
