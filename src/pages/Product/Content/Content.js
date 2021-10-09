import React from 'react';
import './Content.scss';

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      mainImages: [],
    };
  }

  render() {
    const { product } = this.props;
    return (
      <article className="content">
        <ul className="mainImages">
          {product.mainImg?.map(img => (
            <li key={img.id}>
              <img alt="blackPants" src={img.url} />
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
          {product.subImg?.map(img => (
            <li key={img.id}>
              <img alt="blackPants" src={img.url} />
            </li>
          ))}
        </ul>
      </article>
    );
  }
}

export default Content;
