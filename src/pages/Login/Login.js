import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/common.scss';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  goToMain = e => {
    const { email, password } = this.state;
    email.includes('@') && password.length >= 8
      ? this.props.history.push('/main')
      : alert('다시 확인해 주세요');
  };

  render() {
    return (
      <div className="login">
        <div className="loginContainer">
          <button className="outButton">
            <i className="fal fa-times"></i>
          </button>
          <p className="loginTitle">로그인</p>
          <p className="loginSubTitle">
            다양한 할인 혜택과 이벤트,보너스 쿠폰을 놓치지 마세요
          </p>

          <button className="kakaoLogin">
            <i className="fas fa-comment"></i> &nbsp;카카오로 로그인
          </button>
          <p className="or">또는</p>
          <div className="emailName">
            <p className="emailTitle">
              이메일<span>&#42;</span>
            </p>
            <input className="emailInput" name="email" />
          </div>
          <div className="passwordInput">
            <p className="passwordTitle">
              비밀번호<span>&#42;</span>
            </p>
            <input type="password" className="passwordInput" name="password" />
          </div>
          <div className="loginState">
            <div className="checkBox">
              <input type="checkbox" name="loginCheck" />
              <span className="loginStateCheck">로그인 상태 유지</span>
            </div>
            <span className="lostPassword">비밀번호를 잊으셨나요?</span>
          </div>
          <div className="mainButton">
            <Link to="/main">
              <button className="loginButton">
                <p>로그인</p>
              </button>
            </Link>
            <Link to="/signup">
              <button className="goToSignUp">멤버십 가입하기</button>
            </Link>
          </div>
          <Link to="#" className="membership">
            멤버십 정보
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
