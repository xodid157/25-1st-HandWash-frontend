import React from 'react';
import { Link } from 'react-router-dom';
import './FilterSideBar.scss';

class FilterSideBar extends React.Component {
  render() {
    const { total } = this.props;
    return (
      <div className="navFilterRight">
        <div className="itemListNum">{total}개 아이템</div>
        <div>
          <Link to="#">모델</Link>
        </div>
        <div>
          <Link to="#">제품</Link>
        </div>
        <div>
          <Link to="#">
            <i className="far fa-square"></i>
          </Link>
        </div>
        <div>
          <Link to="#">
            <i className="fas fa-th-large"></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default FilterSideBar;
