import React, { Component } from 'react';

class Trend extends Component {
  render() {
    const { category, categoryTitle, img } = this.props;
    return (
      <li>
        <img alt="trend_img" src={img} />
        <div className="categoryTitleContent">
          <p className="category">{category}</p>
          <p>{categoryTitle}</p>
        </div>
      </li>
    );
  }
}

export default Trend;
