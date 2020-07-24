import React, { useContext, useEffect } from 'react';
import './User.scss';
import { Avatar, Descriptions, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { api } from 'app/utils';
import { userContext } from 'app/contexts/user.context';

export default function User(props: any) {
  const { user, setUser } = useContext(userContext);

  /**
   * Sign out current user
   */
  const onSignOut = ()  => {
    api.delete('logout').then(() => props.history.push('/'));
  }

  /**
   * @override
   */
  useEffect(() => {
    const { userId } = props.match.params;
    api
      .get(`users/${userId}`)
      .then((response) => setUser(response.data))
      .catch(({ response }) => {
        if (response.status === 401) {
          onSignOut();
        }
      });
  })

  return (
    <div className="container mt-5">
      <div className="text-center">
        {
          user.avatar_url ? (
            <Avatar size={120} src={user.avatar_url} />
          ) : (
            <Avatar size={120} icon={<UserOutlined />} />
          )
        }
      </div>
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
        在 <a href="https://github.com/tech-gamers/ideas/issues">这里</a> 参与正在进行中的项目或者发布新想法
      </h6>
      <h6>扫码加入微信群</h6>
      <img src="/assets/images/wechat-group.jpeg" alt="wechat group QR code" style={{ maxWidth: '300px' }} />
      <hr />
      <div className="mt-4 text-right">
        <Button danger onClick={onSignOut}>
          Sign out
        </Button>
      </div>
    </div>
  );
}
