import React from 'react';

class HideBarMenu extends React.Component {
  render() {
    const { menu } = this.props;
    return (
      <li>
        <span>{menu}</span>
        <i className="fas fa-arrow-right"></i>
      </li>
    );
  }
}
export default HideBarMenu;
