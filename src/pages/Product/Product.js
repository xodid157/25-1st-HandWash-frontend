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
    };
  }

  componentDidMount() {
    fetch('./data/Product/product.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          product: result,
        });
      });
  }
  openSize = () => {
    this.setState({
      isSizeModal: true,
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
    const { parcelModal, product, detailsModal, isSizeModal, isHeart } =
      this.state;
    return (
      <main className="product">
        <section className="productMain">
          <Content product={product} />
          <Side
            product={product}
            openSize={this.openSize}
            isSizeModal={isSizeModal}
            closeModal={this.closeModal}
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
