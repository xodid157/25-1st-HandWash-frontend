import React from 'react';
import FavoritesList from './FavoritesList/FavoritesList';
import './Favorites.scss';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritesList: [],
      isSizeModal: false,
    };
  }

  componentDidMount() {
    fetch('./data/Product/product.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          favoritesList: result,
        });
      });
  }

  handleSizeModal = () => {
    const { isSizeModal } = this.state;
    this.setState({
      isSizeModal: !isSizeModal,
    });
  };

  render() {
    const { isSizeModal } = this.state;
    return (
      <section className="favorites">
        <div
          className={isSizeModal ? 'black' : ''}
          onClick={this.closeModal}
        ></div>
        <div className="favoritContentBox">
          <div className="title">
            <span className="titleText">즐겨찾기</span>
          </div>
          <div className="number">
            <span>7 아이템</span>
          </div>
          <div className="contentBox">
            <ul className="listBox">
              <FavoritesList
                handleSizeModal={this.handleSizeModal}
                isSizeModal={isSizeModal}
              />
              <FavoritesList
                handleSizeModal={this.handleSizeModal}
                isSizeModal={isSizeModal}
              />
              <FavoritesList
                handleSizeModal={this.handleSizeModal}
                isSizeModal={isSizeModal}
              />
              <FavoritesList
                handleSizeModal={this.handleSizeModal}
                isSizeModal={isSizeModal}
              />
              <FavoritesList
                handleSizeModal={this.handleSizeModal}
                isSizeModal={isSizeModal}
              />
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Favorites;
