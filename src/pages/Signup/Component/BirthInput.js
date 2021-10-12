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
        {/* {BIRTH_INPUT.map(inputName => {
          return (
            <div key={inputName.id} className="birthInput">
              <input
                className={inputName.titlename}
                name={inputName.subname}
                placeholder={inputName.place}
                maxLength={inputName.length}
                onChange={this.props.handleInput}
              />
              <span>{inputName.name}</span>
            </div>
          );
        })} */}
      </div>
    );
  }
}

// const BIRTH_INPUT = [
//   {
//     id: 1,
//     titlename: 'yearInput',
//     subname: 'year',
//     place: '----',
//     length: '4',
//     name: '년',
//   },
//   {
//     id: 2,
//     titlename: 'dayInput',
//     subname: 'month',
//     place: '--',
//     length: '2',
//     name: '월',
//   },
//   {
//     id: 3,
//     titlename: 'dayInput',
//     subname: 'day',
//     place: '--',
//     length: '2',
//     name: '일',
//   },
// ];
export default BirthInput;
