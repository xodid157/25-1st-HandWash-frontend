import React from 'react';

class Slistname extends React.Component {
  render() {
    const { onClickFilter, children } = this.props;
    return (
      <li onClick={onClickFilter} className="sListName">
        <span>{children}</span>
      </li>
    );
  }
}

export default Slistname;
