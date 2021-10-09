import React from 'react';
import { Link } from 'react-router-dom';

class Slistname extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <li className="sListName">
        <Link to="#">{children}</Link>
      </li>
    );
  }
}

export default Slistname;
