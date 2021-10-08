import React from 'react';
import { SERVICES_LIST, CATEGORIES_LIST, USER_MENU } from './data';
import './Nav.scss';

class Nav extends React.Component {
  render() {
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

        <ul className="menu">
          {CATEGORIES_LIST.map((category, idx) => (
            <li key={idx}>{category}</li>
          ))}
        </ul>

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
