import React from 'react';
import './App.scss';
import { Layout } from 'antd';
import Home from './home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Header from './header/Header'
import User from './user/User';
import ErrorBoundary from './ErrorBoundary';
import NoMatch from './NoMatch';

const { Content, Footer } = Layout;

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          {/* Header */}
          <Header />

          {/* Content */}
          <Content className="spi-app__content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/users/:userId" component={User} />
              <Route component={NoMatch}/>
            </Switch>
          </Content>

          {/* Footer */}
          <Footer className="text-center">©2020 Created by Tech Gamers</Footer>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}
