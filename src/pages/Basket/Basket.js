import React from 'react';
import Basketitem from './Basketitem';
import './Basket.scss';
class Basket extends React.Component {
  constructor() {
    super();
    this.setState = {
      item: '',
      itemlist: [],
    };
  }

  additem = e => {
    const { item, itemlist } = this.state;
    this.setState({
      itemlist: itemlist.concat(item), // 이게 제품을 장바구니 추가하면 리스트에 붙이는것
    });
  };
  render() {
    return (
      <div className="cart">
        <p className="basketTitle">쇼핑백</p>

        <div className="basketContainer">
          <main className="shoppingBasket">
            <ul className="basketList">
              {/* {this.state.itemlist.map((item, index) => {
                return <Basketitem key={index} item={item} />;
              })} */}
              <Basketitem />
              <Basketitem />
              <Basketitem />
              <Basketitem />
            </ul>
          </main>
          <div className="cartSide">할인 코드 추가</div>
        </div>
      </div>
    );
  }
}

export default Basket;
