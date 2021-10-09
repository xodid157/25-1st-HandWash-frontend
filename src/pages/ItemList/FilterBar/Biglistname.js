import React from 'react';
import { Link } from 'react-router-dom';

class Biglistname extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Link className="bigListName" to="#">
        {children}
      </Link>
    );
  }
}

export default Biglistname;
