import React from 'react';
import RecommendationsContent from './RecommendationsContent/RecommendationsContent';
import './Recommendations.scss';

class Recommendations extends React.Component {
  constructor() {
    super();
    this.state = {
      RecommendationsContentList: [],
    };
  }

  componentDidMount() {
    fetch('./data/Product/RecommendationsContentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          RecommendationsContentList: result,
        });
      });
  }

  render() {
    const { RecommendationsContentList } = this.state;
    console.log(RecommendationsContentList);
    return (
      <article className="recommendations">
        <div>
          <p>기타 추천 제품</p>
        </div>
        <ul className="styleBox">
          {RecommendationsContentList.map((content, index) => (
            <RecommendationsContent
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

export default Recommendations;
