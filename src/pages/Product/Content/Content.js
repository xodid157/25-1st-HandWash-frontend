import React from 'react';
import './Content.scss';

class Content extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <article className="content">
        <ul className="mainImages">
          {product.main_image?.map((img, index) => (
            <li key={index}>
              <img alt="mainImage" src={img} />
            </li>
          ))}
        </ul>
        <div className="descriptiontBox">
          <span>{product.description}</span>
          <ul className="material">
            <li>
              <span>구성: </span>
              <span className="materialContent">{product.configuration}</span>
            </li>
            {/* <li>
              <span>보다 지속 가능한 소재: </span>
              <span className="materialContent">오가닉 코튼 100%</span>
            </li>
            <li>
              <span>상품 번호: </span>
              <span className="materialContent">0967542002</span>
            </li> */}
          </ul>
        </div>
        <ul className="remainingImgs">
          {product.sub_image?.map((img, index) => (
            <li key={index}>
              <img alt="blackPants" src={img} />
            </li>
          ))}
        </ul>
      </article>
    );
  }
}

export default Content;
