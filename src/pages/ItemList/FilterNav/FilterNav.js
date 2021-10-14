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
    const { onClickFilter, handleSideBar, selectFilter, deleteFilter, total } =
      this.props;
    return (
      <div className="navv">
        <div className="navFilter">
          <ul className="navi">
            {navlist.map(list => (
              <Listbar
                key={list.id}
                index={list.id}
                bigname={list.bigname}
                sname={list.sname}
                onClickFilter={onClickFilter}
              />
            ))}
            <div className="allFilter">
              <span onClick={handleSideBar}>모든 필터</span>
            </div>
          </ul>
          <FilterSideBar total={total} />
        </div>
        <div className="navFilterList">
          {selectFilter.map((selectFilter, index) => (
            <Filter
              key={index}
              index={index}
              selectFilter={selectFilter}
              deleteFilter={deleteFilter}
            />
          ))}
        </div>
      </div>
    );
  }
}

class Filter extends React.Component {
  render() {
    const { selectFilter, deleteFilter, index } = this.props;
    return (
      <div>
        <span>{selectFilter}</span>
        <i
          data-index={index}
          onClick={() => deleteFilter(selectFilter)}
          className="fas fa-times"
        ></i>
      </div>
    );
  }
}

export default FilterNav;
