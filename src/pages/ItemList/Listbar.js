import React from 'react';
import { Link } from 'react-router-dom';

class Listbar extends React.Component {
  render() {
    return (
      <ul className="navi">
        <li>
          <Link to="#">사이즈</Link>
          <ul>
            <li>
              <Link to="#">XS</Link>
            </li>
            <li>
              <Link to="#">S</Link>
            </li>
            <li>
              <Link to="#">M</Link>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default Listbar;
