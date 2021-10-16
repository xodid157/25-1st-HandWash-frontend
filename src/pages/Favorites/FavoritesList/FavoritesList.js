import React from 'react';
import { Link } from 'react-router-dom';
import FavoritesModal from './FavoritesModal/FavoritesModal';
import './FavoritesList.scss';

class FavoritesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSizeModal: false,
      sizeText: '',
    };
  }

  handleText = content => {
    this.setState({
      sizeText: content,
    });
  };

  handleSizeModal = () => {
    const { isSizeModal } = this.state;
    this.setState({
      isSizeModal: !isSizeModal,
    });
  };

  render() {
    const {
      id,
      image,
      is_conscious,
      name,
      price,
      is_new,
      color,
      sizes,
      goCart,
      handleCarts,
      deleteFavoites,
    } = this.props;

    const { isSizeModal } = this.state;
    return (
      <li className="favoritcontent">
        <div
          className={isSizeModal ? 'black' : ''}
          onClick={this.handleSizeModal}
        ></div>
        <div>
          <div className="delete">
            <Link to={`/product/${id}`}>
              <img alt="listImg" src={image} />
            </Link>
            <i className="far fa-trash-alt" onClick={deleteFavoites}></i>
          </div>
          <div className="contentText">
            <span className="conscious">
              {is_conscious === true && 'Concious'}
            </span>
            <span>{name}</span>
            <span className="price">₩{price}</span>
            <span className="new">{is_new === true && '신제품'}</span>
            <div className="colorBox">
              <span className="color">컬러:</span>
              <span>{color}</span>
            </div>
            <button className="sizeBox" onClick={this.handleSizeModal}>
              {isSizeModal && (
                <FavoritesModal
                  handleSizeModal={this.handleSizeModal}
                  sizes={sizes}
                  handleCarts={handleCarts}
                  id={id}
                  handleText={this.handleText}
                />
              )}
              <span className="sizeText">
                {this.state.sizeText === ''
                  ? '사이즈 선택'
                  : this.state.sizeText}
              </span>
              <i className="fas fa-angle-down"></i>
            </button>
            <button className="order" onClick={goCart}>
              <span>담기</span>
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default FavoritesList;
