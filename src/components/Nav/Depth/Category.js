import React, { Component } from 'react';
import SubCategory from './SubCategory';

class Category extends Component {
  render() {
    const { category, idx, dropDown, dropDownList, dropDownHover } = this.props;
    const { name, main_category } = category;
    const isDropDownActive = dropDownList === idx;

    return (
      <li
        className="depthMenu"
        onMouseEnter={() => dropDownHover(category.id)}
        onMouseLeave={() => dropDownHover(category.id)}
      >
        {name}
        {isDropDownActive && (
          <ul className="twoDepth">
            {main_category.map(
              subCategory =>
                dropDown && (
                  <SubCategory
                    key={subCategory.id}
                    subCategory={subCategory}
                    gender={name === '남성' ? 2 : 1}
                  />
                )
            )}
          </ul>
        )}
      </li>
    );
  }
}

export default Category;
