import React from 'react';
import { Link } from 'react-router-dom';

class Slistname extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <li className="sListName">
        <span>{children}</span>
      </li>
    );
  }
}

export default Slistname;
