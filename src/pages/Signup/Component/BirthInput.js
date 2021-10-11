import React from 'react';

class BirthInput extends React.Component {
  render() {
    return (
      <div className="birthTitle">
        <p className="birthName">
          생년월일<span className="star">&#42;</span>
        </p>
        <div className="birthInput">
          <input
            className="yearInput"
            name="year"
            placeholder="----"
            maxLength="4"
            onChange={this.props.handleInput}
          />
          <span>년</span>
          <input
            className="dayInput"
            name="month"
            placeholder="--"
            maxLength="2"
            onChange={this.props.handleInput}
          />
          <span>월</span>
          <input
            className="dayInput"
            name="day"
            placeholder="--"
            maxLength="2"
            onChange={this.props.handleInput}
          />
          <span>일</span>
        </div>
        <p className="birthCoupon">H&amp;W이 생일 쿠폰을 드립니다</p>
      </div>
    );
  }
}

export default BirthInput;
