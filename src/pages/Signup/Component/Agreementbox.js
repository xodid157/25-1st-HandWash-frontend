import React from 'react';
import { Link } from 'react-router-dom';

class Agreementbox extends React.Component {
  render() {
    return (
      <div className="agreementList">
        <p>다음 내용에 동의합니다.</p>
        <div className="agreementCheck">
          <div className="checkBox">
            <input
              type="checkbox"
              name="ischeck1"
              onClick={this.props.handleInput}
            />
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
            <input
              type="checkbox"
              name="ischeck2"
              onClick={this.props.handleInput}
            />
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
            <input
              type="checkbox"
              name="ischeck3"
              onClick={this.props.handleInput}
            />
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
    );
  }
}

export default Agreementbox;
