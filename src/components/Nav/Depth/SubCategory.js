import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SubCategory extends Component {
  render() {
    const { subCategory, gender } = this.props;

    return (
      <li>
        {subCategory.name}
        <ul className="threeDepth">
          {subCategory.sub_category.map(threeDepth => {
            return (
              <li className="depthList">
                <Link
                  to={{
                    pathname: '/itemlist',
                    state: {
                      filterlist: `sub=${threeDepth.id}&sort=ascPrice&gender=${gender}`,
                    },
                  }}
                  key={threeDepth.id}
                  className="depthLink"
                >
                  {threeDepth.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }
}

export default SubCategory;
