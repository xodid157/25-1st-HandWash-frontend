import React, { Component } from 'react';

class SubCategory extends Component {
  render() {
    const { subCategory } = this.props;

    return (
      <li>
        {subCategory.name}
        <ul className="threeDepth">
          {subCategory.sub_category.map(threeDepth => {
            return <li key={threeDepth.id}>{threeDepth.name}</li>;
          })}
        </ul>
      </li>
    );
  }
}

export default SubCategory;
