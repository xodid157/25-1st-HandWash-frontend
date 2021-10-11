import React from 'react';

class SignupInput extends React.Component {
  render() {
    return (
      <>
        <div className="emailTitle">
          <span className="emailName">
            이메일<span className="star">&#42;</span>
          </span>
          <input className="emailInput" name="email" />
        </div>
        <div className="passwordTitle">
          <p className="passwordName">
            비밀번호 설정하기<span className="star">&#42;</span>
          </p>
          <input type="password" className="passwordInput" name="password" />
        </div>
      </>
    );
  }
}

export default SignupInput;
