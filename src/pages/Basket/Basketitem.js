import React from 'react';
import './Basket.scss';

class Basketitem extends React.Component {
  render() {
    const { key, name, price, img, size, color, total } = this.props;
    return (
      <li className="addItem">
        <button
          className="trash"
          onClick={() => this.props.handleId(this.props.cart_id)}
        >
          <i className="far fa-trash-alt"></i>
        </button>
        <img className="itemImg" alt="aa" src={img} />
        <span className="itemInfo">
          <div className="itemTag">
            <p>{name}</p>
            <p className="price">₩ {price}</p>
          </div>
          <ul className="itemInfoList">
            <li>
              <span>상품 번호:</span>
              <span>{key}</span>
            </li>
            <li>
              <span>사이즈:</span>
              <span>{size}</span>
            </li>
            <li>
              <span>컬러:</span>
              <span>{color}</span>
            </li>
            <li>
              <span>합계:</span>
              <span>{total}</span>
            </li>
          </ul>
          <div className="addBox">
            <button className="addHarth">
              <i className="far fa-heart"></i>
            </button>
            <select className="count" name="count">
              {/* <option>1</option>
            <option>2</option> */}
              <option>3</option>
            </select>
          </div>
        </span>
      </li>
    );
  }
}

export default Basketitem;
