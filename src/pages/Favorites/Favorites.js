import React from 'react';
import FavoritesList from './FavoritesList/FavoritesList';
import './Favorites.scss';
import API from '../../config';
class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritesList: [],
      product_id: '',
      size: '',
      deleteId: '',
    };
  }

  componentDidMount() {
    // fetch('./data/Favorites/favoritesData.json', {
    fetch(`${API.like}`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          favoritesList: result,
        });
      });
  }

  goCart = () => {
    const { product_id, size } = this.state;
    fetch(API.cart, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        product_id: product_id,
        size: size,
      }),
    });
  };

  deleteFavoites = () => {
    const { product_id } = this.state;
    fetch(API.like, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        product_id: product_id,
      }),
    });
  };

  handleCarts = (content, id) => {
    this.setState({
      size: content,
      product_id: id,
    });
  };

  render() {
    const { isSizeModal, favoritesList, size } = this.state;
    return (
      <section className="favorites">
        <div className="favoritContentBox">
          <div className="title">
            <span className="titleText">즐겨찾기</span>
          </div>
          <div className="number">
            <span>7 아이템</span>
          </div>
          <div className="contentBox">
            <ul className="listBox">
              {favoritesList.PRODUCTS_USER_LIKED?.map?.((content, index) => (
                <FavoritesList
                  key={index}
                  handleSizeModal={this.handleSizeModal}
                  isSizeModal={isSizeModal}
                  id={content.product_id}
                  image={content.image}
                  is_conscious={content.is_conscious}
                  name={content.name}
                  price={content.price}
                  is_new={content.is_new}
                  color={content.color}
                  sizes={content.sizes}
                  goCart={this.goCart}
                  handleCarts={this.handleCarts}
                  deleteFavoites={this.deleteFavoites}
                  size={size}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Favorites;
