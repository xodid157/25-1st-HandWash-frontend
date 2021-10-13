import React from 'react';
import './Basket.scss';
class Basket extends React.Component {
  render() {
    return (
      <div className="cart">
        <p className="basketTitle">쇼핑백</p>

        <div className="basketContainer">
          <main className="shoppingBasket">
            <ul className="basketList">
              <li className="addItem">
                <img
                  src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=795&q=80
"
                  alt="outer"
                  className="itemImg"
                ></img>
                <span className="itemInfo">
                  <span className="itemTag">
                    <span>A라인 쇼트 드레스</span>
                    <span className="price">₩ 29,990</span>
                  </span>
                  {/* 나중에 중괄호 한다음 데이터 값을 받을거임 */}

                  <i className="far fa-trash-alt"></i>
                  <span>
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
                  </span>
                </span>
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
      </div>
    );
  }
}

export default Basket;
