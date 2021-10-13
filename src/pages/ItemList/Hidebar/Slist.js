import React from 'react';

class Slist extends React.Component {
  render() {
    const { menu } = this.props;
    return (
      <li>
        <span>{menu}</span>
      </li>
    );
  }
}
export default Slist;
