import React from 'react';
import FavoritesList from './FavoritesList/FavoritesList';
import './Favorites.scss';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritesList: [],
    };
  }

  componentDidMount() {
    fetch('./data/Favorites/favoritesData.json', {
      // fetch('http://10.58.7.112:8000/likes/like', {
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

  render() {
    console.log(this.state.favoritesList);
    const { isSizeModal, favoritesList } = this.state;
    // console.log(favoritesList[0]?.sizes);
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
              {favoritesList.map((content, index) => (
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
