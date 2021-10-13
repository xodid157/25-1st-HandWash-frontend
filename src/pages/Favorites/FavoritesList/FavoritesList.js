import React from 'react';
import FavoritesModal from './FavoritesModal/FavoritesModal';
import './FavoritesList.scss';

class FavoritesList extends React.Component {
  render() {
    console.log(this.props);
    const { handleSizeModal, isSizeModal } = this.props;
    return (
      <li className="favoritcontent">
        <div>
          <div className="delete">
            <img
              alt="listImg"
              src="https://cdn.pixabay.com/photo/2021/07/15/08/04/man-6467779_1280.jpg"
            />
            <i className="far fa-trash-alt"></i>
          </div>
          <div className="contentText">
            <span className="conscious">Conscious</span>
            <span>레귤러핏 옥스퍼드 셔츠</span>
            <span className="price">₩29,900</span>
            <span className="new">신제품</span>
            <div className="colorBox">
              <span className="color">컬러:</span>
              <span>챠콜 그레이</span>
            </div>
            <button className="sizeBox" onClick={handleSizeModal}>
              {isSizeModal && (
                <FavoritesModal handleSizeModal={handleSizeModal} />
              )}
              <span className="sizeText">사이즈 선택</span>
              <i className="fas fa-angle-down"></i>
            </button>
            <button className="order">
              <span>담기</span>
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default FavoritesList;
