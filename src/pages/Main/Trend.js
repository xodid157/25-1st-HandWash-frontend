import React, { Component } from 'react';

class Trend extends Component {
  render() {
    const { category, categoryTitle } = this.props;
    return (
      <li>
        <img
          src="https://www2.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10217.png"
          alt=""
        />
        <div className="categoryTitleContent">
          <p className="category">{category}</p>
          <p>{categoryTitle}</p>
        </div>
      </li>
    );
  }
}

export default Trend;
