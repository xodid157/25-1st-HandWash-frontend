import React from 'react';
import { Link } from 'react-router-dom';

class Agreementbox extends React.Component {
  render() {
    return (
      <div className="agreementList">
        <p>다음 내용에 동의합니다.</p>

        {AGREEMENT_LIST.map(checkName => {
          return (
            <div className="agreementCheck" key={checkName.id}>
              <div className="checkBox">
                <input
                  type="checkbox"
                  name={checkName.name}
                  onClick={this.props.handleInput}
                />
                <span>
                  {checkName.content}
                  <span className="star">&#42;</span>
                </span>
              </div>
              <Link to="#" className="terms">
                전문보기
              </Link>
            </div>
          );
        })}
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

const AGREEMENT_LIST = [
  { id: 1, name: 'ischeck1', content: '멤버십 및 HW.com 이용 약관(필수)' },
  { id: 2, name: 'ischeck2', content: '개인정보 수집, 이용, 처리, 위탁(필수)' },
  { id: 3, name: 'ischeck3', content: '개인정보 국외이전(필수)' },
];

export default Agreementbox;
