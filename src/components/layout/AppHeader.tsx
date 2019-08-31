import * as React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { Layout, Menu  } from 'antd';
import {RouterProps} from "react-router";
import Avatar from "antd/es/avatar";
const { Header } = Layout;

const AppHeader = (props : RouterProps) => {
    {console.log("test",props.history.location.pathname)}
    return (
        <Header className="header">
            <div className="logo"/>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["/".concat(props.history.location.pathname.split("/")[1])]}
                style={{lineHeight: '64px'}}
            >
                <Menu.Item key="/">
                    <Link to="/" className="nav-text">Home</Link>
                </Menu.Item>
                <Menu.Item key="/sales">
                    <Link to="/sales" className="nav-text">Sales</Link>
                </Menu.Item>
                <Menu.Item key="/inventory">
                    <Link to="/inventory" className="nav-text">Inventory</Link>
                </Menu.Item>
                <Menu.Item key="/reports">
                    <Link to="/reports" className="nav-text">Reports</Link>
                </Menu.Item>
                <Menu.Item style={{float: "right"}} key="/register">
                    <Link to="/register" className="nav-text">Register</Link>
                </Menu.Item>
                <Menu.Item style={{float: "right"}} key="/login">
                    <Link to="/login" className="nav-text">Login</Link>
                </Menu.Item>
                <Avatar shape="square" size={50} icon="user" style={{float: "right", marginTop: "7px"}}/>
            </Menu>
        </Header>
    );
}
export default withRouter(AppHeader);