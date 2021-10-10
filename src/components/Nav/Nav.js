import React from 'react';
import { SERVICES_LIST, USER_MENU } from './data';
import './Nav.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: {
        category_list: [{}],
      },
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
    const { categoryList } = this.state;
    console.log(categoryList.category_list[0].name);
    return (
      <nav className="navContainer">
        <div className="menuServices">
          <ul>
            {SERVICES_LIST.map((el, idx) => (
              <li key={idx}>{el}</li>
            ))}
          </ul>

          <ul className="userMenu">
            {USER_MENU.map((userMenu, idx) => (
              <li key={idx}>
                <i className={`fas ${userMenu.type}`} />
                <span>{userMenu.txt}</span>
              </li>
            ))}
          </ul>
        </div>

        <h1 className="logo">
          H <span className="small">&#x0026;</span> W
        </h1>

        <div>
          <ul className="menu">
            {categoryList.map((category, idx) => {
              return <li key={idx}>{category.name}</li>;
            })}
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
