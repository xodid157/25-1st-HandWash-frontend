import React from 'react';
import { Link } from 'react-router-dom';
import Colorchip from './ColorChip/Colorchip';
import API from '../../config';
import './Item.scss';

const TOKEN = localStorage.getItem('token');

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeBtn: false,
    };
  }

  handleLikeBtn = () => {
    const { likeBtn } = this.state;
    const { id } = this.props;
    this.setState({
      likeBtn: !likeBtn,
    });

    fetch(`${API.like}`, {
      method: 'POST',
      headers: {
        Authorization: TOKEN,
      },
      body: JSON.stringify({ product_id: id }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          alert('즐겨찾기에 추가되었습니다.');
        }
      });
  };

  render() {
    const { id, name, price, img, color, is_new, is_conscious } = this.props;
    const { likeBtn } = this.state;
    return (
      <li className="item">
        <div className="itemImg">
          <Link to={`/product/${id}`}>
            <img src={img} alt={name} />
          </Link>
          {/* <div className="imgInPrice">
            <p>{price}</p>
          </div> */}

          <i
            onClick={this.handleLikeBtn}
            className={`fas fa-heart fa-2x ${likeBtn ? 'likeBtn' : ''}`}
          ></i>
        </div>
        <div className="itemText">
          <div
            className={`notConcious ${is_conscious === true && 'yesConcious'}`}
          >
            {is_conscious === true && 'Concious'}
          </div>
          <div className="itemName">
            <Link to={`/product/${id}`}>{name}</Link>
          </div>
          <div className="itemprice">{`W${price}`}</div>
          <div className="itemColor">
            {color.map((color, index) => (
              <Colorchip key={index} color={color} />
            ))}
          </div>
          <div className="newItem">{is_new === true && '신제품'}</div>
        </div>
      </li>
    );
  }
}

export default Item;
