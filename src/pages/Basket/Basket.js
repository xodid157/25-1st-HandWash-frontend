import React from 'react';
import Basketitem from './Basketitem';
import Payment from './Payment/ Payment';
import { withRouter } from 'react-router';
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
    fetch('http://10.58.4.132:8000/carts', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.x31UKAwNRZ5yxDR4VBMMf4M-_r60wtVVIMBwKd7xGRM',
      },
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          itemlist: result,
        });
        localStorage.setItem('token', result.token);
      });
  }

  goCart = () => {
    // const { product_id, size } = this.state;
    fetch('http://10.58.4.132:8000/carts/carts?cart_id=<int:cart_id>', {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.x31UKAwNRZ5yxDR4VBMMf4M-_r60wtVVIMBwKd7xGRM',
      },
      body: JSON.stringify({
        product_id: 35,
        size: 'M',
      }),
    });
  };

  orderComplete = () => {
    const { itemlist } = this.state;
    if (itemlist.length === 0) {
      alert('장바구니가 비었습니다.');
    } else {
      alert('결제 끄읕 이제 그만 이러다 다죽어');
      this.setState({ itemlist: [] });
    }
  };

  render() {
    console.log(this.state.itemlist);
    const { itemlist } = this.state;
    return (
      <div className="cart">
        <p className="basketTitle">쇼핑백</p>

        <div className="basketContainer">
          <main className="shoppingBasket">
            <ul className="basketList">
              {itemlist.product_list?.map(item => {
                return (
                  <Basketitem
                    handleInput={this.props.goCart}
                    img={item.image}
                    key={item.product_id}
                    name={item.name}
                    price={item.price}
                    size={item.size}
                    color={item.color}
                    total={item.products_price}
                  />
                );
              })}
            </ul>
          </main>
          <div className="cartSide">
            <Payment
              orderComplete={this.orderComplete}
              total={itemlist.total_price}
              deliveryFee={itemlist.delivery_fee}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Basket);
