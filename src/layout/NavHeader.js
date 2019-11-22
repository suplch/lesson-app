import React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
const { Header} = Layout;

export class NavHeader extends React.Component {

    render() {
        const { lessons, currentLesson, choiceNav } = this.props;
        const menuItems = lessons.map((lesson) => {
            return (
                <Menu.Item key={lesson.name} onClick={() => choiceNav(lesson.name)}>
                    {lesson.text}
                </Menu.Item>
            );
        });

        return (
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[currentLesson.name]}
                    style={{ lineHeight: '64px' }}>

                    {menuItems}
                </Menu>
            </Header>
        );
    }
}

function mapStateToProps (state) {
    return {
        lessons: state.nav.lessons,
        currentLesson: state.nav.currentLesson,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        choiceNav(navName) {
            dispatch({type: 'switchNav', payload: {navName}});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader)
