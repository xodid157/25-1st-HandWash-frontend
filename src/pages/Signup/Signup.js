import React from 'react';
import { Link } from 'react-router-dom';
import AddInformation from '../Signup/Component/AddInformation';
import '../../styles/common.scss';
import './Signup.scss';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      birth: '',
      isInfo: false,
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToMain = e => {
    const { email, password, birth } = this.state;

    fetch('메인으로 가는 백엔드 주소', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        birth: birth, //여기 백엔드랑 할 때 안되면 쪼갠거 확인
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res.token);
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.props.history.push('/main');
        }
      });
  };

  changeList = e => {
    this.setState({
      isInfo: !this.state.isInfo,
      // 이걸 실행됬을 때 isInfo가 true 아니면 false
    });
  };

  render() {
    return (
      <div className="signUp">
        <div className="signUpContainer">
          <button className="outButton">
            <i className="fal fa-times"></i>
          </button>
          <p className="loginTitle">멤버십 가입하기</p>
          <p className="loginSubTitle">
            다양한 할인 혜택과 이벤트,보너스 쿠폰을 놓치지 마세요
          </p>

          <button className="kakaoLogin">
            <i className="fas fa-comment"></i> &nbsp;카카오로 가입
          </button>
          <p className="or">또는</p>
          <div className="emailTitle">
            <span className="emailName">
              이메일<span className="star">&#42;</span>
            </span>
            <input
              className="emailInput"
              name="email"
              onChange={this.handleInput}
            />
          </div>
          <div className="passwordTitle">
            <p className="passwordName">
              비밀번호 설정하기<span className="star">&#42;</span>
            </p>
            <input
              type="password"
              className="passwordInput"
              name="password"
              onChange={this.handleInput}
            />
          </div>
          <div className="birthTitle">
            <p className="birthName">
              생년월일<span className="star">&#42;</span>
            </p>
            <div className="birthInput">
              <input
                className="yearInput"
                name="birth"
                onChange={this.handleInput}
                placeholder="----"
                maxLength="4"
              />
              <span>년</span>
              <input
                className="dayInput"
                name="birth"
                onChange={this.handleInput}
                placeholder="--"
                maxLength="2"
              />
              <span>월</span>
              <input
                className="dayInput"
                name="birth"
                onChange={this.handleInput}
                placeholder="--"
                maxLength="2"
              />
              <span>일</span>
            </div>
            <p className="birthCoupon">H&amp;W이 생일 쿠폰을 드립니다</p>
          </div>
          <button
            className="
            addInformation"
            onClick={this.changeList}
          >
            <span className="benefits">
              정보 추가하고 더 큰 혜택을 받으세요
            </span>
            {/* 여기에 아이콘을 누르면 display: none 이였다가 펼쳐지게 기능 구현 */}
            {/* 이후 + 클릭시 +, span색 빨간색으로 변경 */}
            <i className="fal fa-plus"></i>
          </button>
          {this.state.isInfo && <AddInformation />}
          <div className="agreementList">
            <p>다음 내용에 동의합니다.</p>
            {/* 여기도 필수항목 3개 체크하면 멤버십가입 버튼 활성화하게 선택 영역은 상관없음 */}
            <div className="agreementCheck">
              <div className="checkBox">
                <input type="checkbox" name="agreementCheck" />
                <span>
                  멤버십 및 HW.com 이용 약관(필수)
                  <span className="star">&#42;</span>
                </span>
              </div>
              <Link to="#" className="terms">
                전문보기
              </Link>
            </div>
            <div className="agreementCheck">
              <div className="checkBox">
                <input type="checkbox" name="agreementCheck" />
                <span>
                  개인정보 수집, 이용, 처리, 위탁(필수)
                  <span className="star">&#42;</span>
                </span>
              </div>
              <Link to="#" className="terms">
                전문보기
              </Link>
            </div>
            <div className="agreementCheck">
              <div className="checkBox">
                <input type="checkbox" name="agreementCheck" />
                <span>
                  개인정보 국외이전(필수)<span className="star">&#42;</span>
                </span>
              </div>
              <Link to="#" className="terms">
                전문보기
              </Link>
            </div>
            <div className="agreementCheck">
              <div className="checkBox">
                <input type="checkbox" name="agreementCheck" />
                <span>마케팅 정보수신(선택)</span>
              </div>
            </div>
          </div>
          <p className="footer">
            모든 멤버십 경험을 제공하기 위하여, H&amp;M
            <Link to="#" className="membership">
              개인정보처리방침
            </Link>
            에 따라 고객 개인정보를 처리합니다.
          </p>
          <button className="signUpButton" onClick={this.goToMain}>
            <p className="signButtonSubmit">멤버십 가입하기</p>
          </button>
          <Link to="/login" className="goToLogin">
            로그인으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }
}

export default Signup;
