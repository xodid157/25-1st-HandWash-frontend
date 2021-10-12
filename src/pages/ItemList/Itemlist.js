import React from 'react';
import HideBar from './Hidebar/HideBar';
import FilterNav from './FilterNav/FilterNav';
import Header from './Header/Header';
import Items from './Items/Items';
import './Itemlist.scss';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemlist: [],
      isSidebar: false,
      filter: [],
    };
  }

  componentDidMount() {
    fetch('data/itemLists.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ itemlist: data });
      });
  }

  onClickFilter = e => {
    const filterText = e.target.innerText;
    const { filter } = this.state;

    this.setState({
      filter: [...filter, filterText],
    });
    console.log(filter);
  };

  handleSideBar = () => {
    const { isSidebar } = this.state;
    this.setState({
      isSidebar: !isSidebar,
    });
  };

  render() {
    const { isSidebar, itemlist } = this.state;
    return (
      <>
        <HideBar isSidebar={isSidebar} />
        <div className="list">
          <div className="itemListPage">
            <Header />
            <FilterNav
              handleSideBar={this.handleSideBar}
              onClickFilter={this.onClickFilter}
            />
            <Items itemlist={itemlist} />
          </div>
        </div>
      </>
    );
  }
}
export default ItemList;

// componentDidMount() {
//   fetch('products/2')
//     .then(res => res.json())
//     .then(result => {
//       this.setState({
//         itemlist: [result],
//       });
//     });
// }
