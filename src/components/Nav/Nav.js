import React from 'react';
import Login from '../Login/Login';
import { SERVICES_LIST, MAIN_MENU_LIST, USER_MENU } from './data';
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

  render() {
    const { categoryList } = this.state;
    console.log(categoryList.category_list[0].main_category?.[0].name);

    return (
      <nav className="navContainer">
        <div className="menuServices">
          <ul class="menuServicesList">
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

            <Login />
          </ul>
        </div>

        <h1 className="logo">
          H <span className="small">&#x0026;</span> W
        </h1>

        <div>
          <ul className="menu">
            {categoryList.category_list.map((category, idx) => {
              return <li key={idx}>{category.name}</li>;
            })}

            {MAIN_MENU_LIST.map((mainMenu, idx) => {
              return <li key={idx}>{mainMenu}</li>;
            })}
          </ul>

          <ul className="subMenu">
            {categoryList.category_list.main_category?.map((subMenu, idx) => {
              return <li key={idx}>{subMenu.name}</li>;
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
