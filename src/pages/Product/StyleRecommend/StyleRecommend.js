import React from 'react';
import StyleContent from './StyleContent/StyleContent';
import './StyleRecommend.scss';

class StyleRecommend extends React.Component {
  constructor() {
    super();
    this.state = {
      styleContentList: [],
    };
  }

  componentDidMount() {
    fetch('./data/Product/styleContentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          styleContentList: result,
        });
      });
  }

  render() {
    const { styleContentList } = this.state;
    console.log(styleContentList);
    return (
      <article className="styleRecommend">
        <div>
          <p>스타일</p>
        </div>
        <ul className="styleBox">
          {styleContentList.map((content, index) => (
            <StyleContent
              key={index}
              name={content.name}
              url={content.url}
              price={content.price}
              is_new={content.is_new}
              id={content.id}
            />
          ))}
        </ul>
      </article>
    );
  }
}

export default StyleRecommend;
