import React from 'react';
import { SERVICES_LIST, USER_MENU } from './data';
import './Nav.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: {},
    };
  }

  componentDidMount() {
    fetch('http://172.30.1.12:8000/products/categories', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(category => {
        this.setState({
          categoryList: category,
        });
      });
  }

  render() {
    console.log(this.state.categoryList);
    return (
      <nav className="navContainer">
        <div className="menuServices">
          <ul>
            {SERVICES_LIST.map((el, idx) => (
              <li key={idx}>{el}</li>
            ))}
          </ul>

          <ul className="userMenu">
            {USER_MENU.map((menu, idx) => (
              <li key={idx}>
                <i className={`fas ${menu.type}`} />
                <span>{menu.txt}</span>
              </li>
            ))}
          </ul>
        </div>

        <h1 className="logo">
          H <span className="small">&#x0026;</span> W
        </h1>

        <div>
          <ul className="menu">
            {categoryList.map((menu, idx) => (
              <li key={idx}>{menu}</li>
            ))}
          </ul>
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
