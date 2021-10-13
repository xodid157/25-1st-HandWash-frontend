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
                <img
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80
"
                  alt="반팔"
                ></img>
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
