import React from 'react';
import Slistname from './Slistname';
import Biglistname from './Biglistname';
import './ListBar.scss';

class Listbar extends React.Component {
  render() {
    const { bigname, sname } = this.props;
    return (
      <li className="listBar">
        <Biglistname>{bigname}</Biglistname>
        <ul className="sListWrapper">
          {sname.map((name, index) => (
            <Slistname key={index}>{name}</Slistname>
          ))}
        </ul>
      </li>
    );
  }
}

export default Listbar;
