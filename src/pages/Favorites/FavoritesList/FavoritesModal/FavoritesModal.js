import React from 'react';
import './FavoritesModal.scss';
class FavoritesModal extends React.Component {
  render() {
    const { handleSizeModal } = this.props;
    return (
      <section className="favoritesModal">
        <div className="sizeModal">
          <div className="sizeGuide">
            <button className="guideButton">
              <span>사이즈 가이드</span>
            </button>
            <button className="close" onClick={handleSizeModal}>
              <div></div>
            </button>
          </div>
          <div className="sizeTitle">
            <span>사이즈 선택</span>
            <i className="fas fa-angle-up"></i>
          </div>
          <ul className="sizeContent">
            {/* {product.size?.map(content => (
              <li key={content}>
                <button>
                  <span>{content}</span>
                </button>
              </li>
            ))} */}
            <li>
              <button>
                <span>S</span>
              </button>
            </li>
            <li>
              <button>
                <span>M</span>
              </button>
            </li>
            <li>
              <button>
                <span>L</span>
              </button>
            </li>
            <li>
              <button>
                <span>XL</span>
              </button>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default FavoritesModal;
