import * as React from 'react';
import { Layout, Menu  } from 'antd';
const { Header } = Layout;

const AppHeader = () =>
    (
        <Header className="header">
            <div className="logo"/>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{lineHeight: '64px'}}
            >
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Sales</Menu.Item>
                <Menu.Item key="3">Inventory</Menu.Item>
                <Menu.Item key="4">Reports</Menu.Item>
                <Menu.Item style={{float: "right"}} key="5">Register</Menu.Item>
                <Menu.Item style={{float: "right"}} key="6">Login</Menu.Item>
            </Menu>
        </Header>
    );
export default AppHeader;