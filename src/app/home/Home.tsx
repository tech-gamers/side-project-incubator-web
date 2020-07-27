import React from 'react';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import useCsrfToken from 'app/hooks/useCsrfToken';

export default function Home() {
  const [csrfToken] = useCsrfToken();
  return (
    <div className="container mt-5">
      <h2>欢迎来到【玩儿技术】社区</h2>
      <h2>在这里找到志同道合的技术热爱者一起享受创造的乐趣！社区网站正在从零开始搭建当中。我们需要你的协助</h2>
      <br />
      <form action="https://api.tech-gamers.live/auth/github" method="post">
        <input type="hidden" name="authenticity_token" value={csrfToken} />
        <button type="submit" className="ant-btn ant-btn-lg ant-btn-block" disabled={csrfToken.length === 0}>
          Sign in with Github &nbsp;
          <FontAwesomeIcon icon={faGithub} />
        </button>
      </form>
    </div>
  );
}
