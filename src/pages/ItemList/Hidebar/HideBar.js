import React from 'react';
import HideBarMenu from './hideBarMenu';
import FILTER_LIST from '../FILTERLIST';
import './HideBar.scss';

class HideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterList: FILTER_LIST,
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
      </div>
    );
  }
}

export default HideBar;
