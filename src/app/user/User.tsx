import React, { Component } from 'react';
import './User.scss';
import { Avatar, Descriptions, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';

class User extends Component<{ history: any, match: any }, { user: any }> {
  state = {
    user: {
      name: '',
      email: '',
      avatar_url: undefined
    }
  };

  constructor(props: any) {
    super(props);
    this.onSignOut = this.onSignOut.bind(this);
  }

  /**
   * @override
   */
  componentDidMount() {
    const { userId } = this.props.match.params;
    axios.get(`/api/users/${userId}`).then((response) => {
      this.setState({ user: response.data });
    });
  }

  /**
   * Sign out current user
   */
  onSignOut() {
    axios.delete('/auths/sign_out').then(() => this.props.history.push('/'));
  }

  render() {
    const { user } = this.state;
    const avatar = user.avatar_url ? (
      <Avatar size={120} src={user.avatar_url} />
    ) : (
      <Avatar size={120} icon={<UserOutlined />} />
    );
    return (
      <div className="container mt-5">
        <div className="text-center">{avatar}</div>
        <Descriptions title="User Info">
          <Descriptions.Item label="User Name">{user.name}</Descriptions.Item>
          <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
        </Descriptions>
        <hr />
        <h4>
          欢迎加入
          <a href="https://github.com/tech-gamers">【玩儿技术】社区</a>
        </h4>
        <h5>在这里找到志同道合的技术热爱者一起享受创造的乐趣！社区网站正在从零开始搭建当中。我们需要你的协助</h5>
        <h6 className="mt-3">
          加入我们的{' '}
          <a href="https://join.slack.com/t/w1594707327-wme701731/shared_invite/zt-fqc09gau-udUOCoJChUZ_L40euEG0Bg">
            Slack 频道
          </a>
        </h6>
        <h6>
          在 <a href="https://github.com/tech-gamers/ideas/issues">这里</a> 参与正价进行中的项目或者发布新想法
        </h6>
        <h6>扫码加入微信群</h6>
        <img src="/assets/images/wechat-group.jpeg" alt="wechat group QR code" style={{ maxWidth: '300px' }} />
        <hr />
        <div className="mt-4 text-right">
          <Button danger onClick={this.onSignOut}>
            Sign out
          </Button>
        </div>
      </div>
    );
  }
}
export default User;
