import React from 'react';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div className="container mt-5">
      <h2>欢迎来到【玩儿技术】社区</h2>
      <h2>在这里找到志同道合的技术热爱者一起享受创造的乐趣！社区网站正在从零开始搭建当中。我们需要你的协助</h2>
      <br />
      <form action="https://api.tech-gamers.live/auth/github" method="post">
        <button type="submit">
          Sign in with Github &nbsp;
          <FontAwesomeIcon icon={faGithub} />
        </button>
      </form>
    </div >
  );
}
