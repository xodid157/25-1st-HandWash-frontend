import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="listName">
          <h1 className="title">모두보기</h1>
        </div>
        <div className="content">
          <p>
            새로운 필터 기능을 사용해서 당신에게 딱 맞는 사이즈를 찾아보세요!
            영캐주얼부터 뷰티제품까지 다양하게 준비되어 있으니 지금 둘러보세요
          </p>
        </div>
      </>
    );
  }
}

export default Header;
