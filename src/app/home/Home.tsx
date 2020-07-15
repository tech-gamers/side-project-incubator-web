import React, { Component } from 'react';
import { Button } from 'antd';

class Home extends Component<{}, {}> {
  render() {
    return (
      <>
        <br />
        <h1>欢迎来到【玩儿技术】社区</h1>
        <h1>在这里找到志同道合的技术热爱者一起享受创造的乐趣！ 社区网站正在从零开始搭建当中。我们需要你的协助</h1>
        <br />
        <Button type="default" size="large" block>
          Sign in with Github
        </Button>
      </>
    );
  }
}
export default Home;
