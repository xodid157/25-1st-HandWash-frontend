import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/common.scss';
import './Signup.scss';

class Signup extends React.Component {
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
          <div className="emailName">
            <span className="emailTitle">
              이메일<span className="star">&#42;</span>
            </span>
            <input className="emailInput" name="email" />
          </div>
          <div className="passwordName">
            <p className="passwordTitle">
              비밀번호 설정하기<span className="star">&#42;</span>
            </p>
            <input type="password" className="passwordInput" name="password" />
          </div>
          <div className="birthName">
            <p className="birthTitle">
              생년월일<span className="star">&#42;</span>
            </p>
            <input className="birthInput" name="birth" />
            <p className="birthCoupon">H&amp;W이 생일 쿠폰을 드립니다</p>
          </div>
          <button
            className="
            addInformation"
          >
            <span className="benefits">
              정보 추가하고 더 큰 혜택을 받으세요
            </span>
            <i className="fal fa-plus"></i>
          </button>
          <div className="agreementList">
            <p>다음 내용에 동의합니다.</p>
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
          <Link to="1" className="goToLogin">
            로그인으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }
}

export default Signup;
