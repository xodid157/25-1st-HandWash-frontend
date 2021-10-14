import React from 'react';

class LoginInput extends React.Component {
  render() {
    return (
      <>
        <div className="emailName">
          <p className="emailTitle">
            이메일<span>&#42;</span>
          </p>
          <input
            className="emailInput"
            name="email"
            onChange={this.props.handleInput}
          />
        </div>
        <div className="passwordInput">
          <p className="passwordTitle">
            비밀번호<span>&#42;</span>
          </p>
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

export default LoginInput;
