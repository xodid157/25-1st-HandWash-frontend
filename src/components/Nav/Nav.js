import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="menuServices">
            <ul>
              <li>고객 서비스</li>
              <li>뉴스레터</li>
              <li>매장 찾기</li>
              <li>
                <i class="fas fa-ellipsis-h"></i>
              </li>
            </ul>

            <ul className="userMenu">
              <li>
                <i class="fas fa-user"></i> <span>로그인</span>
              </li>
              <li>
                <i class="fas fa-heart"></i> <span>즐겨찾기</span>
              </li>
              <li>
                <i class="fas fa-shopping-bag"></i> <span>쇼핑백</span>
              </li>
            </ul>
          </div>

          <h1 className="logo">
            H <span className="small">&#x0026;</span> W
          </h1>

          <ul className="menu">
            <li>여성</li>
            <li>남성</li>
            <li>아동</li>
            <li>Sale</li>
          </ul>

          <form>
            <button>
              <i class="fas fa-search"></i>
            </button>
            <input placeholder="제품 검색" />
          </form>
        </nav>
      </div>
    );
  }
}

export default Nav;
