import React from 'react';
import { withRouter } from 'react-router';
import SizeModal from './SizeModal/SizeModal';
import './Side.scss';
// import { Link } from 'react-router-dom';

class Side extends React.Component {
  goToColor = id => {
    this.props.history.push(`/product/${id}`);
  };
  // componentDidUpdate() {
  //   this.goToColor = id => {
  //     this.props.history.push(`/product/${id}`);
  //   };
  // }
  render() {
    const { product, openSize, isSizeModal, closeModal } = this.props;
    return (
      <article className="side">
        {isSizeModal && <SizeModal product={product} closeModal={closeModal} />}
        <div className="sideBox">
          <div className="sideNameBox">
            <span className="productName">{product.name}</span>
            <i className="fas fa-heart"></i>
          </div>
          <div className="productPrice">
            <span>₩ {product.price} </span>
          </div>
          <div className="productColor">
            <span>{product.color?.[0].color}</span>
          </div>
          <ul className="productColorImg">
            {product.color?.map(content => (
              <li key={content.id}>
                {/* <Link to={`/products/${content?.id}`}> */}
                {/* <Link to={this.goToColor}> */}
                <img
                  alt="colors"
                  src={content.image}
                  onClick={() => this.goToColor(content.id)}
                />
                {/* </Link> */}
              </li>
            ))}
          </ul>
          <div className="size">
            <button type="button" onClick={openSize}>
              <span>사이즈 선택</span>
              <i className="fas fa-angle-down"></i>
            </button>
          </div>
          <div className="order">
            <button type="button" onClick={openSize}>
              <i className="fas fa-shopping-bag"></i>
              <span>담기</span>
            </button>
          </div>
        </div>
      </article>
    );
  }
}

export default withRouter(Side);
