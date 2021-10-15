import React from 'react';

class LoginError extends React.Component {
  render() {
    return (
      <>
        <div className="erroreEmail">
          <p className="emailTitle">
            이메일<span>&#42;</span>
          </p>
          <p className="errorText"> 이메일을 확인해주세요.</p>
          <input
            className="emailInput"
            name="email"
            onChange={this.props.handleInput}
          />
        </div>
        <div className="errorPassword">
          <p className="passwordTitle">
            비밀번호<span>&#42;</span>
          </p>
          <p className="errorText">비밀번호를 입력하십시오.</p>
          <input
            type="password"
            className="passwordInput"
            name="password"
            onChange={this.props.handleInput}
          />
        </div>
      </>
    );
  }
}

export default LoginError;
