import React from 'react';

class ContentInfo extends React.Component {
  render() {
    return (
      <article className="contentInfo">
        <ul>
          <li>
            <button type="button">
              <span>세부정보</span>
            </button>
          </li>
          <li>
            <button type="button">
              <span>배송 및 결제</span>
            </button>
          </li>
          <li>
            <button type="button">
              <span>제품 배경</span>
            </button>
          </li>
        </ul>
        <div>
          <span className="parcel">
            배송 기간: 1-2일 소요. 기본 5만원 이상 구매 시 무료 배송, 멤버십
            회원은 3만원 이상 구매 시 무료 배송 (플러스 회원은 항상 무료 배송)
          </span>
        </div>
      </article>
    );
  }
}

export default ContentInfo;
