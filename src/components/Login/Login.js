import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <ul className="userMenuLogin">
        <li>
          <button>로그인</button>
        </li>
        <li>내 계정</li>
        <li>멤버십 정보</li>
        <li>
          <Link to="/" className="goMember">
            아직 회원이 아니세요? 여기서 가입하세요
          </Link>
        </li>
      </ul>
    );
  }
}

export default Login;
