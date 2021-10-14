import React, { Component } from 'react';
import { MAIN_MENU_LIST } from '../data';
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
    fetch('http://10.58.4.132:8000/products/categories', {
      method: 'GET',
    })
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
          {categoryList.category_list?.map((category, idx) => {
            return (
              <>
                <li
                  className="depthMenu"
                  key={category.id}
                  onMouseEnter={() => this.dropDownHover(category.id)}
                >
                  {category.name}
                  {dropDownList - 1 === idx && (
                    <ul className="twoDepth">
                      {category.main_category?.map(twoDepth => {
                        return (
                          dropDown && (
                            <li key={twoDepth.id}>
                              {twoDepth.name}
                              <ul>
                                {twoDepth.sub_category.map(threeDepth => {
                                  console.log(threeDepth);
                                  return (
                                    <li key={threeDepth.id}>
                                      {threeDepth.name}
                                    </li>
                                  );
                                })}
                              </ul>
                            </li>
                          )
                        );
                      })}
                    </ul>
                  )}
                </li>
              </>
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

        {/* <ul className="twoDepth">
          {categoryList.category_list?.map(category => {
            return category.main_category?.map(twoDepth => {
              return <li key={twoDepth.id}>{twoDepth.name}</li>;
            });
          })}
        </ul> */}

        {/* <div className="menuDepth">
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
        </div> */}
      </div>
    );
  }
}

export default Depth;
