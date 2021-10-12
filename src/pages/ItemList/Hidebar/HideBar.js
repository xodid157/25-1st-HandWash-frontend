import React from 'react';
import HideBarMenu from './hideBarMenu';
import filterlist from '../Mock/filterlist';
import './HideBar.scss';

class HideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterList: filterlist,
    };
  }

  render() {
    const { isSidebar } = this.props;
    const { filterList } = this.state;
    return (
      <div className={`hideBar ${isSidebar ? '' : 'showBar'}`}>
        <ul>
          <p className="title">필터 및 정렬</p>
          {filterList.map((menu, index) => (
            <HideBarMenu key={index} menu={menu.bigname} smenu={menu.sname} />
          ))}
        </ul>
        <div className="line"></div>
        <div className="allItem">
          <span>439개 아이템</span>
        </div>
        <div className="hideBarBtn">
          <button>모두 비우기</button>
          <button>완료</button>
        </div>
      </div>
    );
  }
}

export default HideBar;
