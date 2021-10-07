import React from 'react';
import { Link } from 'react-router-dom';
import Colorchip from './Colorchip';

class Item extends React.Component {
  render() {
    const { name, price, img, colors } = this.props;
    return (
      <li className="item">
        <div className="itemImg">
          <Link to="#">
            <img src={img} alt={name} />
          </Link>
          <div className="imgInPrice">
            <p>{price}</p>
          </div>
          <i className="fas fa-heart fa-2x"></i>
        </div>
        <div className="itemText">
          <div className="ex">Conscious</div>
          <div className="itemName">
            <Link to="#">{name}</Link>
          </div>
          <div className="itemprice">{price}</div>
          <div className="itemColor">
            {colors.map((color, index) => (
              <Colorchip key={index} color={color} />
            ))}
          </div>
          <div className="newItem">신제품</div>
        </div>
      </li>
    );
  }
}

export default Item;

// color.length > 0 &&
