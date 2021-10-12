import React from 'react';
import './AddInformation.scss';

class AddInformation extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     email: '',
  //     password: '',
  //   };
  // }
  render() {
    return (
      <div className="information">
        <p className="subInfo">
          아래에 정보를 추가하면 추가 포인트 및 편리한 쇼핑을 위한 고객 맞춤
          정보를 제공해 드립니다. 특별한 혜택을 받아보세요.
        </p>
        <div className="infoInputList">
          <div className="inputBox">
            <p className="inputTitle">이름</p>
            <input
              className="infoInput"
              name="lastname"
              onChange={this.props.handleInput}
            />
          </div>
          <div className="inputBox">
            <p className="inputTitle">성</p>
            <input
              className="infoInput"
              name="firstname"
              onChange={this.props.handleInput}
            />
          </div>
          <div className="inputBox">
            <p className="inputTitle">성별</p>
            <select
              className="infoInput"
              name="gender"
              onClick={this.props.handleInput}
            >
              <option value="sex">성별을 선택하십시오</option>
              <option value="man">남성</option>
              <option value="woman">여성</option>
            </select>
          </div>
          <div className="inputBox">
            <p className="inputTitle">우편 번호</p>
            <input className="infoInput" name="zipCode" />
          </div>
          <div className="inputBox">
            <p className="inputTitle">전화 번호</p>
            <input className="infoInput" name="phoneNumber" />
          </div>
          {/* {ADD_INFO.map(inputName => {
            return (
              <div key={inputName.id} className="inputBox">
                <p className="inputTitle">{inputName.title}</p>
                <input className="infoInput" name={inputName.name} />
              </div>
            );
          })} */}
          <p className="exNumber">예 010-1234-5678</p>
          <p className="exNumber">
            휴대폰 번호를 입력하면 특별 프로모션 정보를 문자로 보내드립니다.
          </p>
        </div>
      </div>
    );
  }
}

// const ADD_INFO = [
//   { id: 1, title: '이름', name: 'lastname' },
//   { id: 2, title: '성', name: 'firstname' },
//   { id: 3, title: '성별', name: 'sex' },
//   { id: 4, title: '우편번호', name: 'zipCode' },
//   { id: 5, title: '전화번호', name: 'phoneNumber' },
// ];
export default AddInformation;
