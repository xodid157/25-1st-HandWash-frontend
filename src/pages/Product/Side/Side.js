import React from 'react';

class Side extends React.Component {
  render() {
    return (
      <article className="side">
        <div className="sideBox">
          <div className="sideNameBox">
            <span className="productName">코튼 조거 팬츠</span>
            {/* <i class="far fa-heart"></i> */}
            <i class="fas fa-heart"></i>
          </div>
          <div className="productPrice">
            <span>₩ 39,900</span>
          </div>
          <div className="productColor">
            <span>블랙</span>
          </div>
          <ul className="ProductColorImg">
            <li>
              <img alt="colors" src="./images/Product/hmgoepprod (2).jpeg" />
            </li>
            <li>
              <img alt="colors" src="./images/Product/hmgoepprod (2).jpeg" />
            </li>
            <li>
              <img alt="colors" src="./images/Product/hmgoepprod (2).jpeg" />
            </li>
            <li>
              <img alt="colors" src="./images/Product/hmgoepprod (2).jpeg" />
            </li>
            <li>
              <img alt="colors" src="./images/Product/hmgoepprod (2).jpeg" />
            </li>
            <li>
              <img alt="colors" src="./images/Product/hmgoepprod (2).jpeg" />
            </li>
            <li>
              <img alt="colors" src="./images/Product/hmgoepprod (2).jpeg" />
            </li>
          </ul>
          <div className="size">
            <button type="button">
              <span>사이즈 선택</span>
              <i className="fas fa-angle-down"></i>
            </button>
          </div>
          <div className="order">
            <button type="button">
              <i class="fas fa-shopping-bag"></i>
              <span>담기</span>
            </button>
          </div>
        </div>
      </article>
    );
  }
}

export default Side;
