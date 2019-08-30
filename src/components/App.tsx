import * as React from 'react';
import { Layout, Button, } from 'antd';
import './App.scss';
import AppHeader from "./layout/AppHeader";
import AppSideBar from "./layout/AppSideBar";
import AppFooter from "./layout/AppFooter";
import AppContent from "./layout/AppContent";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Layout style={{minHeight: '100vh'}}>
                    <AppHeader/>
                    <Layout style={{display: 'flex', alignItems: 'stretch'}}>
                        <AppSideBar/>
                        <Layout style={{padding: '0 24px 0'}}>
                            <AppContent/>
                        </Layout>
                    </Layout>
                    <AppFooter/>
                </Layout>
            </div>
        );
    }
}


export default App;