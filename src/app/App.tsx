import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { Layout } from 'antd';

// Components
import ErrorBoundary from 'app/ErrorBoundary';
import NoMatch from 'app/NoMatch';
import Home from 'app/home/Home';
import Dashboard from 'app/dashboard/Dashboard';
import Header from 'app/header/Header';
import User from 'app/user/User';

// Contexts
import GlobalContextProvider from 'app/contexts/global.context';

const { Content, Footer } = Layout;

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <GlobalContextProvider>
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
          </GlobalContextProvider>

          {/* Footer */}
          <Footer className="text-center">©2020 Created by Tech Gamers</Footer>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}
