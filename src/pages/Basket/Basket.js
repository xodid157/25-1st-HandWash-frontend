import React from 'react';
import Basketitem from './Basketitem';

import './Basket.scss';

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // item: '',
      itemlist: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.4.132:8000', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          itemlist: result,
        });
      });
  }

  render() {
    console.log(this.state.itemlist);
    const { itemlist } = this.state;
    return (
      <div className="cart">
        <p className="basketTitle">쇼핑백</p>

        <div className="basketContainer">
          <main className="shoppingBasket">
            <ul className="basketList">
              {itemlist.map?.(item => {
                return (
                  <Basketitem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    img={item.main_image}
                    color={item.color}
                    size={item.size}

                    // sum={item.price}
                  />
                );
              })}
            </ul>
          </main>
          <div className="cartSide"></div>
        </div>
      </div>
    );
  }
}

export default Basket;
