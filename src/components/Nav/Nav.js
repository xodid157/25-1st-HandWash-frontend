import React from 'react';
import Login from './Login/Login';
import ShoppingBag from './ShoppingBag/ShoppingBag';
import Depth from './Depth/Depth';
import { SERVICES_LIST } from './data';
import './Nav.scss';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: {},
      isUserMenuLogin: false,
      isUserMenuShoppingBag: false,
      isDepthMenu: false,
    };
  }

  componentDidMount() {
    fetch('data/magazineData.json')
      .then(magazine => magazine.json())
      .then(data =>
        this.setState({
          magazineList: data,
        })
      );
  }

  userMenuHoverChange = () => {
    this.setState({
      isUserMenuLogin: !this.state.isUserMenuLogin,
    });
  };

  userMenuHoverShopping = () => {
    this.setState({
      isUserMenuShoppingBag: !this.state.isUserMenuShoppingBag,
    });
  };

  render() {
    const { isUserMenuLogin, isUserMenuShoppingBag } = this.state;

    return (
      <nav className="navContainer">
        <div className="menuServices">
          <ul className="menuServicesList">
            {SERVICES_LIST.map((el, idx) => (
              <li key={idx}>{el}</li>
            ))}
          </ul>

          <ul className="userMenu">
            <li
              onMouseEnter={this.userMenuHoverChange}
              onMouseLeave={this.userMenuHoverChange}
            >
              <i className="fas fa-user" />
              로그인
              {isUserMenuLogin && <Login />}
            </li>
            <li>
              <i className="fas fa-heart" />
              즐겨찾기
            </li>
            <li
              onMouseEnter={this.userMenuHoverShopping}
              onMouseLeave={this.userMenuHoverShopping}
            >
              <i className="fas fa-shopping-bag" />
              쇼핑백
              {isUserMenuShoppingBag && <ShoppingBag />}
            </li>
          </ul>
        </div>

        <Link to="/" className="logoLink">
          <h1 className="logo">
            H <span className="small">&#x0026;</span> W
          </h1>
        </Link>

        <div>
          <Depth />
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
