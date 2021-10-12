import React from 'react';

class Slist extends React.Component {
  render() {
    const { menu,smenu } = this.props;
    console.log(menu);
    return (
      <li>
        <span>{menu}</span>
      </li>
    );
  }
}
export default Slist;
