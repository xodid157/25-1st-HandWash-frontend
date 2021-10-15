import React from 'react';
import Side from './Side/Side';
import Content from './Content/Content';
import ContentInfo from './ContentInfo/ContentInfo';
import StyleIntroduce from './StyleIntroduce/StyleIntroduce';
import StyleRecommend from './StyleRecommend/StyleRecommend';
import Recommendations from './Recommendations/Recommendations';
import ParcelModal from './ParcelModal/ParcelModal';
import DetailsModal from './DetailsModal/DetailsModal';
import './Product.scss';

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [],
      etailsModal: false,
      parcelModal: false,
      isSizeModal: false,
      isHeart: false,
      product_id: '',
      size: '',
    };
  }

  componentDidMount() {
    // fetch('./data/Product/product.json', {
    fetch(`http://10.58.3.102:8000/products/${this.props.match.params.id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          product: result,
        });
      });
  }

  goCart = () => {
    const { product_id, size } = this.state;
    fetch('http://10.58.3.102:8000/carts', {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.x31UKAwNRZ5yxDR4VBMMf4M-_r60wtVVIMBwKd7xGRM',
      },
      body: JSON.stringify({
        product_id: product_id,
        size: size,
      }),
    });
  };

  handleCarts = (content, id) => {
    this.setState({
      size: content,
      product_id: id,
    });
  };

  openSize = () => {
    const { isSizeModal } = this.state;
    this.setState({
      isSizeModal: !isSizeModal,
    });
  };

  openModal = () => {
    this.setState({
      parcelModal: true,
    });
  };

  openDetail = () => {
    this.setState({
      detailsModal: true,
    });
  };

  colorHeart = () => {
    this.setState({
      isHeart: !this.state.isHeart,
    });
  };

  closeModal = () => {
    this.setState({
      detailsModal: false,
      parcelModal: false,
      isSizeModal: false,
    });
  };

  render() {
    const { parcelModal, product, detailsModal, isSizeModal, isHeart, size } =
      this.state;
    console.log(this.state.product_id, this.state.size);
    return (
      <main className="product">
        <section className="productMain">
          <Content product={product} />
          <Side
            product={product}
            openSize={this.openSize}
            isSizeModal={isSizeModal}
            closeModal={this.closeModal}
            goCart={this.goCart}
            handleCarts={this.handleCarts}
            id={product.id}
            size={size}
          />
          <div
            className={
              detailsModal || parcelModal || isSizeModal ? 'black' : ''
            }
            onClick={this.closeModal}
          >
            <DetailsModal
              detailsModal={detailsModal}
              closeModal={this.closeModal}
              product={product}
            />
            <ParcelModal
              parcelModal={parcelModal}
              closeModal={this.closeModal}
            />
          </div>
        </section>
        <section>
          <ContentInfo
            openModal={this.openModal}
            openDetail={this.openDetail}
          />
          <StyleIntroduce />
          <StyleRecommend colorHeart={this.colorHeart} isHeart={isHeart} />
          <Recommendations colorHeart={this.colorHeart} isHeart={isHeart} />
        </section>
      </main>
    );
  }
}

export default Product;
