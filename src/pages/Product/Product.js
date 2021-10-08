import React from 'react';
import Side from './Side/Side';
import Content from './Content/Content';
import ContentInfo from './ContentInfo/ContentInfo';
import StyleIntroduce from './StyleIntroduce/StyleIntroduce';
import StyleRecommend from './StyleRecommend/StyleRecommend';
import Recommendations from './Recommendations/Recommendations';
import './Product.scss';

class Product extends React.Component {
  render() {
    return (
      <main className="product">
        <section class="productMain">
          <Content />
          <Side />
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
