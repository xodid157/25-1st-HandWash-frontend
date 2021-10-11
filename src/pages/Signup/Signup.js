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
      ischeck1: '',
      ischeck2: '',
      ischeck3: '',
      isInfo: false,
      lastname: '',
      firstname: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  // 목데이터 연습 함수
  // componentDidMount() {
  //   fetch('http://localhost:3000/data/SignupData.json')
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res);
  //     });
  // }
  goToMain = e => {
    // const { ischeck1, ischeck2, ischeck3 } = this.state;
    // if ((ischeck1, ischeck2, ischeck3 === 'on')) {
    //   this.props.history.push('/main');
    // } else if ((ischeck1, ischeck2, ischeck3 === 'off')) {
    //   alert('*표시된 필드는 필수 항목입니다.');
    // }
    const { email, password, year, month, day } = this.state;
    fetch('http://172.30.1.4:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        birth: year + '-' + month + '-' + day, //여기 백엔드랑 할 때 안되면 쪼갠거 확인
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
    });
  };
  render() {
    console.log('체크', this.state.year);
    return (
      <div className="signUp">
        <div className="signUpContainer" onChange={this.handleInput}>
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
            {/* 이후 + 클릭시 +, span색 빨간색으로 변경 */}
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
