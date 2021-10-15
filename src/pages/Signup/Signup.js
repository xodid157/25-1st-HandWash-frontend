import React from 'react';
import { Link } from 'react-router-dom';
import SignupInput from './Component/SignupInput';
import BirthInput from './Component/BirthInput';
import AddInformation from '../Signup/Component/AddInformation';
import Agreementbox from './Component/Agreementbox';
import './Signup.scss';
import '../../styles/common.scss';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      year: '',
      month: '',
      day: '',
      gender: '',
      ischeck1: '',
      ischeck2: '',
      ischeck3: '',
      isInfo: false,
      lastname: '',
      firstname: '',
      zipCode: '',
      phoneNumber: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  goToMain = e => {
    const {
      email,
      password,
      year,
      month,
      day,
      lastname,
      firstname,
      gender,
      zipCode,
      phoneNumber,
    } = this.state;
    fetch('http://10.58.7.112:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        birth: year + '-' + month + '-' + day,
        last_name: lastname,
        first_name: firstname,
        gender: gender,
        zip_code: zipCode,
        phone_number: phoneNumber,
      }),
    })
      .then(res => res.json())
      .then(res => {
        this.props.history.push('/main');
      });
  };
  checkcondition = () => {
    const { ischeck1, ischeck2, ischeck3 } = this.state;
    if ((ischeck1, ischeck2, ischeck3 === 'on')) {
      return this.goToMain;
    } else if ((ischeck1, ischeck2, ischeck3 === 'off')) {
      alert('*표시된 필드는 필수 항목입니다.');
    }
  };
  changeList = e => {
    this.setState({
      isInfo: !this.state.isInfo,
    });
  };
  render() {
    return (
      <div className="signUp">
        <div className="signUpContainer" onChange={this.handleInput}>
          <Link to="/main">
            <button className="outButton">
              <i className="fal fa-times"></i>
            </button>
          </Link>
          <p className="loginTitle">멤버십 가입하기</p>
          <p className="loginSubTitle">
            다양한 할인 혜택과 이벤트,보너스 쿠폰을 놓치지 마세요
          </p>

          <button className="kakaoLogin">
            <i className="fas fa-comment"></i> &nbsp;카카오로 가입
          </button>
          <p className="or">또는</p>
          <SignupInput />
          <BirthInput handleInput={this.handleInput} />
          <button
            className="
            addInformation"
            onClick={this.changeList}
          >
            <span className="benefits">
              정보 추가하고 더 큰 혜택을 받으세요
            </span>
            <i className="fal fa-plus"></i>
          </button>
          {this.state.isInfo && (
            <AddInformation handleInput={this.handleInput} />
          )}
          <Agreementbox handleInput={this.handleInput} />
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
