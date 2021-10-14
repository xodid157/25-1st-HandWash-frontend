import React, { Component } from 'react';
import './ShoppingBag.scss';

class ShoppingBag extends Component {
  render() {
    return (
      <div className="shoppingBagInfo">
        <div className="infoContents">
          <p className="infoHeading">귀하의 쇼핑백이 비어 있습니다. </p>
          <div className="infoPrice">
            <p className="">주문 가격</p>
            <p>₩ 0</p>
          </div>
          <div className="infoTotal">
            <p>합계</p>
            <p>₩ 0</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingBag;
