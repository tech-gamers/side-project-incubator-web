import './Home.scss';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  /**
   * Login use github
   */
  const onGithubLogin = (): void => {
    window.location.href = 'https://api.tech-gamers.live/auths/auth/github';
  }

  return (
    <div className="container mt-5">
      <h2>欢迎来到【玩儿技术】社区</h2>
      <h2>在这里找到志同道合的技术热爱者一起享受创造的乐趣！社区网站正在从零开始搭建当中。我们需要你的协助</h2>
      <br />
      <Button type="default" size="large" block onClick={onGithubLogin}>
        Sign in with Github &nbsp;
        <FontAwesomeIcon icon={faGithub} />
      </Button>
      {/* <Button type="default" size="large" block className="mt-3 spi-home__signin-wechat">
        Sign in with Wechat &nbsp;
        <FontAwesomeIcon icon={faWeixin} />
      </Button> */}
    </div>
  );
}
