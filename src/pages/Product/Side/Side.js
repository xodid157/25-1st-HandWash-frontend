import React from 'react';
import './Side.scss';
class Side extends React.Component {
  // componentDidMount() {
  //   this.setState({
  //     product: this.props.product,
  //   });
  // }
  render() {
    const { product } = this.props;
    console.log(this.props);
    return (
      <article className="side">
        <div className="sideBox">
          <div className="sideNameBox">
            <span className="productName">{product.name}</span>
            <i className="fas fa-heart"></i>
          </div>
          <div className="productPrice">
            <span>₩ {product.price} </span>
          </div>
          <div className="productColor">
            <span>블랙</span>
          </div>
          <ul className="productColorImg">
            {product.color?.map(url => (
              <li key={url.id}>
                <img alt="colors" src={url.image} />
              </li>
            ))}
          </ul>
          <div className="size">
            <button type="button">
              <span>사이즈 선택</span>
              <i className="fas fa-angle-down"></i>
            </button>
          </div>
          <div className="order">
            <button type="button">
              <i className="fas fa-shopping-bag"></i>
              <span>담기</span>
            </button>
          </div>
        </div>
      </article>
    );
  }
}

export default Side;
