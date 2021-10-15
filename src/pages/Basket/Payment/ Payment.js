import React from 'react';
import { Link } from 'react-router-dom';
import './Payment.scss';
// import { withRouter } from 'react-router';

class Payment extends React.Component {
  render() {
    const { total, deliveryFee } = this.props;
    return (
      <div className="sidePayment">
        <article className="payment">
          <p>할인 코드 추가</p>
          <div className="saleCodeInput">
            <input className="saleCode" />
            <button className="add">추가</button>
          </div>
          <p className="개">로그인하시고 개인 특가 혜택을 누려보세요!</p>
          <Link to="/signup">
            <button className="로그인">로그인</button>
          </Link>
          <div className="주문가격">
            <span>주문가격</span>
            <span>₩ {total}</span>
          </div>
          <div className="배송">
            <span>배송</span>
            <span>{deliveryFee}</span>
          </div>
          {/* <div className="line"></div> */}
          <div className="합계">
            <span>합계</span>
            <span>₩ {total} </span>
          </div>
          <button className="결제" onClick={this.props.orderComplete}>
            결제 계속하기
          </button>
          <p>가능한 결제 수단</p>
          <p>
            귀하가 결제 단계에 도달할 때까지 가격 및 배송료는 확인되지 않습니다.
          </p>
          <p>
            30일의 반품 가능 기간, 반품 수수료 및 미수취시 발생하는 추가 배송
            요금 읽어보기 <span>반품 및 환불</span>
          </p>
        </article>
        <button className="반품">
          <i className="fas fa-box-open"></i>배송 및 반품 옵션
        </button>
      </div>
    );
  }
}

export default Payment;
