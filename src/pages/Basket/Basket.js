import React from 'react';
import './Basket.scss';
class Basket extends React.Component {
  render() {
    return (
      <>
        <header>
          <p className="basketTitle">쇼핑백</p>
        </header>
        <div className="basketContainer">
          <main className="shoppingBasket">
            <ul className="basketList">
              <li>
                <div className="itemImage">
                  <img></img>
                </div>
                <div className="itemName">
                  <span>A라인 쇼트 드레스</span>
                  <span>₩ 29,990</span>
                  {/* 나중에 중괄호 한다음 데이터 값을 받을거임 */}
                </div>
                <i className="far fa-trash-alt"></i>
                <ul className="itemInfo">
                  <li>
                    <span>상품 번호:</span>
                    <span>0991090004</span>
                  </li>
                  <li>
                    <span>사이즈:</span>
                    <span>42</span>
                  </li>
                  <li>
                    <span>컬러:</span>
                    <span>오렌지/화이트 플로럴</span>
                  </li>
                  <li>
                    <span>합계:</span>
                    <span>₩ 29,990</span>
                  </li>
                </ul>
                <button>
                  <i className="far fa-heart"></i>
                </button>
                <select className="count" name="count">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </li>
            </ul>
          </main>
          <div className="cartSide">할인 코드 추가</div>
        </div>
      </>
    );
  }
}

export default Basket;
