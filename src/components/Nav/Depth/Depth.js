import React, { Component } from 'react';
import { MAIN_MENU_LIST } from '../data';
import Category from './Category';
import './Depth.scss';

class Depth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: {},
      dropDown: false,
      dropDownList: 0,
    };
  }

  componentDidMount() {
    fetch('http://10.58.3.102:8000/products/categories')
      // fetch('data/navListData.json')
      .then(res => res.json())
      .then(category => {
        this.setState({
          categoryList: category,
        });
      });
  }

  dropDownHover = id => {
    this.setState({
      dropDown: !this.state.dropDown,
      dropDownList: id,
    });
  };

  render() {
    const { categoryList, dropDown, dropDownList } = this.state;

    return (
      <div className="menuContents">
        <ul className="menu">
          {categoryList.category_list?.map(category => {
            return (
              <Category
                key={category.id}
                idx={category.id}
                category={category}
                dropDown={dropDown}
                dropDownList={dropDownList}
                dropDownHover={this.dropDownHover}
              />
            );
          })}

          {MAIN_MENU_LIST.map((mainMenu, idx) => {
            return (
              <li key={idx} className="mockDataDepth">
                {mainMenu}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Depth;
