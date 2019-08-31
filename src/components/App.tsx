import * as React from 'react';
import { Layout, Button, } from 'antd';
import './App.scss';
import AppHeader from "./layout/AppHeader";
import AppSideBar from "./layout/AppSideBar";
import AppFooter from "./layout/AppFooter";
import AppContent from "./layout/AppContent";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Registrations from "./registration/Registration";
import Login from "./login/Login";

class App extends React.Component {
    render() {
        return (
            <Router >
                <div className="app">
                    <Layout style={{minHeight: '100vh'}}>
                        <AppHeader />
                        <Layout style={{display: 'flex', alignItems: 'stretch'}}>
                            <AppSideBar/>
                            <Layout style={{padding: '0 24px 0'}}>
                                <AppContent>
                                    <Switch>
                                        <Route exact path="/" component= {() => (<div> Home </div>) }/>
                                        <Route path="/sales" component={() => (<div> Sales</div>) }/>
                                        <Route path="/inventory" component={() => (<div>inventory</div>) }/>
                                        <Route path="/login" component={() => (<Login/>) }/>
                                        <Route path="/register" component={() => (<Registrations/>) }/>
                                        <Route component={() => (<div></div>) }/>
                                    </Switch>
                                </AppContent>
                            </Layout>
                        </Layout>
                        <AppFooter/>
                    </Layout>
                </div>
            </Router>
        );
    }
}


export default App;