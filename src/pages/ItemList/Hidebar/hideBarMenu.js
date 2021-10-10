import React from 'react';
// import Slist from './Slist';

class HideBarMenu extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

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

// <li>
//   <span>{<Slist menu={smenu.filter(x => menu.key == x.key)} />}</span>
// </li>
