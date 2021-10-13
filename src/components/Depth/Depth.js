import React, { Component } from 'react';
import { MAIN_MENU_LIST } from '../../components/Nav/data';
import './Depth.scss';

class Depth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: {},
      dropDown: false,
    };
  }

  componentDidMount() {
    // fetch('http://172.30.1.12:8000/products/categories', {
    //   method: 'GET',
    // })
    //   .then(res => res.json())
    //   .then(category => {
    //     this.setState({
    //       categoryList: category,
    //     });
    //   });

    fetch('data/navListData.json')
      .then(res => res.json())
      .then(category => {
        this.setState({
          categoryList: category,
        });
      });
  }

  dropDownHover = () => {
    this.setState({
      dropDown: !this.state.dropDown,
    });
  };

  render() {
    const { categoryList, dropDown } = this.state;
    console.log(this.state.dropDown, 'test');

    return (
      <div className="menuContents" onMouseEnter={this.dropDownHover}>
        <ul className="menu">
          {categoryList.category_list?.map(category => {
            return <li key={category.id}>{category.name}</li>;
          })}

          {MAIN_MENU_LIST.map((mainMenu, idx) => {
            return <li key={idx}>{mainMenu}</li>;
          })}
        </ul>

        <div className="menuDepth">
          {categoryList.category_list[0] === true ? (
            <span>{categoryList.category_list[0]}</span>
          ) : null}
          
          <ul className="twoDepth">
            {categoryList.category_list?.map(category => {
              return category.main_category?.map(twoDepth => {
                return <li key={twoDepth.id}>{twoDepth.name}</li>;
              });
            })}
          </ul>

          <ul className="threeDepth">
            {categoryList.category_list?.map(category => {
              return category.main_category?.map(sub => {
                return sub.sub_category.map(sub => {
                  return <li key={sub.id}>{sub.name}</li>;
                });
              });
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Depth;
