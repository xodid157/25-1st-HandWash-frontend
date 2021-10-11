import React from 'react';
import { Link } from 'react-router-dom';
import LoginInput from './LoginInput';
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

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToMain = e => {
    fetch('http://172.30.1.4:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res) {
          localStorage.setItem('token', res.token);
          this.props.history.push('/main');
        } else if (!res.token) {
          alert('아이디, 비밀번호를 확인해주세요');
          //이 부분에 이메일 패스워드 조건 걸어주는 건가?
        }
      });
  };
  // 조건에 따라 로그인 버튼 활성화 만들어야됨
  // const { email, password } = this.state;
  // email.includes('@') && password.length >= 8
  //   ? this.props.history.push('/main')
  //   : alert('다시 확인해 주세요');

  render() {
    console.log(this.state.password);
    return (
      <div className="login">
        <div className="loginContainer">
          <button className="closeButton">
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
          <LoginInput handleInput={this.handleInput} />
          <div className="loginState">
            <div className="checkBox">
              <input type="checkbox" name="loginCheck" />
              <span className="loginStateCheck">로그인 상태 유지</span>
            </div>
            <span className="lostPassword">비밀번호를 잊으셨나요?</span>
          </div>
          <div className="mainButton">
            <button className="loginButton" onClick={this.goToMain}>
              <p>로그인</p>
            </button>
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
