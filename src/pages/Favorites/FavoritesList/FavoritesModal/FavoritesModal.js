import React from 'react';
import './FavoritesModal.scss';

class FavoritesModal extends React.Component {
  render() {
    const { handleSizeModal, sizes, handleCarts, id, handleText } = this.props;
    console.log(sizes);
    return (
      <section className="favoritesModal">
        <div className="sizesModal">
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
            {sizes.map(content => {
              return (
                <li key={content} onClick={() => handleText(content)}>
                  <button onClick={() => handleCarts(content, id)}>
                    <span>{content}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default FavoritesModal;
