import React from 'react';
import Slistname from './Slistname';
import Biglistname from './Biglistname';
import './ListBar.scss';

class Listbar extends React.Component {
  render() {
    const { bigname, sname, onClickFilter } = this.props;
    return (
      <li className="listBar">
        <Biglistname>{bigname}</Biglistname>
        <ul onClick={onClickFilter} className="sListWrapper">
          {sname.map((name, index) => (
            <Slistname onClick={onclick} key={index}>
              {name}
            </Slistname>
          ))}
        </ul>
      </li>
    );
  }
}

export default Listbar;
