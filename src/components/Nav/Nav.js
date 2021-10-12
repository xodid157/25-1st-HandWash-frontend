import React from 'react';
import Login from '../Login/Login';
import ShoppingBag from '../ShoppingBag/ShoppingBag';
import { SERVICES_LIST, MAIN_MENU_LIST, USER_MENU } from './data';
import './Nav.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: {},

      isUserMenu: 0,
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

  userMenuHoverChange = () => {
    this.setState({
      isUserMenuLogin: !this.state.isUserMenuLogin,
    });
  };

  render() {
    const { categoryList, isUserMenuLogin, isUserMenuShoppingBag } = this.state;

    // console.log(categoryList?.category_list.main_category.name);

    // console.log(
    //   categoryList.category_list?.[0].main_category?.[0]?.sub_category
    // );

    return (
      <nav className="navContainer">
        <div className="menuServices">
          <ul className="menuServicesList">
            {SERVICES_LIST.map((el, idx) => (
              <li key={idx}>{el}</li>
            ))}
          </ul>

          <ul className="userMenu">
            {USER_MENU.map((userMenu, idx) => (
              <li key={idx} onMouseOver={this.userMenuHoverChange}>
                <i className={`fas ${userMenu.type}`} />
                <span>{userMenu.txt}</span>
              </li>
            ))}

            {isUserMenuLogin && <Login />}
            {isUserMenuShoppingBag && <ShoppingBag />}
            {/* <li onMouseEnter={this.userMenuHoverChange}>
              <i className="fas fa-user" />
              로그인
            </li>
            <li>
              <i className="fas fa-heart" />
              즐겨찾기
            </li>

            <li
              onMouseOver={this.userMenuHoverShopping}
              onMouseLeave={!this.userMenuHoverShopping}
            >
              <i className="fas fa-shopping-bag" />
              쇼핑백
            </li> */}
          </ul>
        </div>

        <h1 className="logo">
          H <span className="small">&#x0026;</span> W
        </h1>

        <div>
          <ul className="menu">
            {categoryList.category_list?.map((category, idx) => {
              return <li key={idx}>{category.name}</li>;
            })}

            {MAIN_MENU_LIST.map((mainMenu, idx) => {
              return <li key={idx}>{mainMenu}</li>;
            })}
          </ul>

          <ul className="subMenu">
            {categoryList.category_list?.map(category => {
              return category.main_category?.map(twoDepth => {
                return <li>{twoDepth.name}</li>;
              });
            })}

            {/* {categoryList.category_list?.map(category => {
              return category.main_category?.map(subCategory => {
                return <li>{subCategory.name}</li>;
              });
            })} */}

            {/* {categoryList.category_list.map(category => {
              return {categoryList.category_list.map}
            }) } */}
          </ul>

          {/* <ul>
            {categoryList.category_list?.map(category => {
              return category.main_category?.map(sub_category => {
                return sub_category?.map(test => {
                  return <li>{test.name}</li>;
                });
              });
            })}
          </ul> */}
        </div>

        <form>
          <button>
            <i className="fas fa-search" />
          </button>
          <input placeholder="제품 검색" />
        </form>
      </nav>
    );
  }
}

export default Nav;
