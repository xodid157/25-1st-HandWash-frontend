import React from 'react';

class Basketitem extends React.Component {
  render() {
    const { key, name, price, img, size, color } = this.props;
    return (
      <li className="addItem">
        <button className="trash">
          <i className="far fa-trash-alt"></i>
        </button>
        <img src={img} className="itemImg" />
        <span className="itemInfo">
          <div className="itemTag">
            <p>{name}</p>
            <p className="price">{price}</p>
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
              <span>{price}</span>
            </li>
          </ul>

          <button className="addHarth">
            <i className="far fa-heart"></i>
          </button>
          <select className="count" name="count">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </span>
      </li>
    );
  }
}

export default Basketitem;
