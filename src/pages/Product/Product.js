import React from 'react';
import Side from './Side/Side';
import Content from './Content/Content';
import ContentInfo from './ContentInfo/ContentInfo';
import StyleIntroduce from './StyleIntroduce/StyleIntroduce';
import StyleRecommend from './StyleRecommend/StyleRecommend';
import Recommendations from './Recommendations/Recommendations';
import './Product.scss';

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    fetch('/data/Product/side.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          product: result,
        });
      });
  }

  render() {
    return (
      <main className="product">
        <section className="productMain">
          <Content product={this.state.product} />
          <Side product={this.state.product} />
        </section>
        <section>
          <ContentInfo />
          <StyleIntroduce />
          <StyleRecommend />
          <Recommendations />
        </section>
      </main>
    );
  }
}

export default Product;
