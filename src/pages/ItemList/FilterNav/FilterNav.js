import React from 'react';
import Listbar from './FilterBar/Listbar';
import FilterSideBar from './FilterRightBar/FilterSideBar';
import filterlist from '../Mock/filterlist';
import './FilterNav.scss';

class FilterNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navlist: filterlist,
    };
  }
  render() {
    const { navlist } = this.state;
    return (
      <div className="navv">
        <div className="navFilter">
          <ul className="navi">
            {navlist.map((list, index) => (
              <Listbar
                key={index}
                bigname={list.bigname}
                sname={list.sname}
                onClickFilter={this.props.onClickFilter}
              />
            ))}
            <div>
              <span className="hii" onClick={this.props.handleSideBar}>
                모든 필터
              </span>
            </div>
          </ul>
          <FilterSideBar />
        </div>
        <div className="navFilterList"></div>
      </div>
    );
  }
}

export default FilterNav;
