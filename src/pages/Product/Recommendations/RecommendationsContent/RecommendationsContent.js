import React from 'react';
import { Link } from 'react-router-dom';
import './RecommendationsContent.scss';

class RecommendationsContent extends React.Component {
  constructor() {
    super();
    this.state = {
      isHeart: false,
    };
  }

  colorHeart = () => {
    this.setState({
      isHeart: !this.state.isHeart,
    });
  };

  render() {
    const { isHeart } = this.state;
    const { url, name, price, is_new, id } = this.props;
    return (
      <li className="recommendationsContent">
        <div className="box">
          <Link to={`/product/${id}`}>
            <img alt="styleImg" src={url} />
          </Link>
          <i
            onClick={this.colorHeart}
            className={`fas fa-heart ${isHeart ? 'red' : ''}`}
          />
        </div>
        <span className="blank">blank staples</span>
        <Link to={`/product/${id}`} className="link">
          {name}
        </Link>
        <span>₩ {price}</span>
        <span className="new">{is_new === true ? '최신 상품' : ''}</span>
      </li>
    );
  }
}

export default RecommendationsContent;
