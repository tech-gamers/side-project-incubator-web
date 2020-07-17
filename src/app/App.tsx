import React, { Component } from 'react';
import './App.scss';
import { Layout } from 'antd';
import Home from './home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Header from './header/Header'
import User from './user/User';

const { Content, Footer } = Layout;

class App extends Component<{}, {}> {
  render(){
    return (
      <Router>
        <Layout>
          {/* Header */}
          <Header />

          {/* Content */}
          <Content className="spi-app__content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
              {/* <Route exact path="/users/:userId" component={User} /> */}
            </Switch>
          </Content>

          {/* Footer */}
          <Footer className="text-center">©2020 Created by Tech Gamers</Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
