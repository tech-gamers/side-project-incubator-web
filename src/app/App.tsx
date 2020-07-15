import React from 'react';
import './App.scss';
import { Layout } from 'antd';
import Home from './home/Home';

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <header className="spi-app__header">
        <section className="container">
          <div className="spi-app__logo">
            <img src="/assets/images/logo.png" alt="logo" />
            玩儿技术
          </div>
        </section>
      </header>
      <Content className="spi-app__content">
        <Home />
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2020 Created by Tech Gamers</Footer>
    </Layout>
  );
}

export default App;
