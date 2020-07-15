import React from 'react';
import './App.scss';
import { Layout, Menu } from 'antd';
import Home from './home/Home';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="spi-app__logo">
          <img src="/assets/images/logo.png" alt="logo" />
          玩儿技术
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Projects</Menu.Item>
        </Menu>
      </Header>
      <Content className="spi-app__content">
        <Home />
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2020 Created by Tech Gamers</Footer>
    </Layout>
  );
}

export default App;
