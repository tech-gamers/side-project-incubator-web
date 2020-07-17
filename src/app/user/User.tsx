import React, { Component } from 'react';
import './User.scss';
import { Avatar, Descriptions, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

class User extends Component<{}, {}> {

  render() {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <Avatar size={120} icon={<UserOutlined />} />
        </div>
        <Descriptions title="User Info">
          <Descriptions.Item label="User Name">Ni shuosha</Descriptions.Item>
          <Descriptions.Item label="Email">example@example.com</Descriptions.Item>
        </Descriptions>
        <hr/>
        <div className="mt-4 text-right">
          <Button danger>Sign out</Button>
        </div>
      </div>
    );
  }
}
export default User;
