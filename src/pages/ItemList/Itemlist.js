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
      selectFilter: [],
      fff: '',
    };
  }

  xx = filter => {
    if (filter === '추천' && '최신' && '낮은가격' && '높은가격') {
      return '정렬기준';
    } else if (filter === 'conscious') {
      return 'CONSCIOUS';
    } else if (filter === 'XS' && 'S' && 'M' && 'L') {
      return '사이즈';
    } else if (
      filter === '퍼플' &&
      '그레이' &&
      '레드' &&
      '그린' &&
      '베이지' &&
      '블랙'
    ) {
      return '컬러';
    }
  };

  componentDidMount() {
    fetch('data/itemLists.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ itemlist: data });
      });
  }

  onClickFilter = e => {
    const filterText = e.target.innerText;
    const { selectFilter, fff } = this.state;

    this.setState({
      selectFilter: [...selectFilter, filterText],
      fff: filterText,
    });

    const yy = `${this.xx(fff)}=${fff}&`;

    console.log(yy);
  };

  deleteFilter = e => {
    console.log(e);
    const { selectFilter } = this.state;
    this.setState({
      selectFilter: selectFilter.filter(select => select.key !== e.target.key),
    });
  };

  handleSideBar = () => {
    const { isSidebar } = this.state;
    this.setState({
      isSidebar: !isSidebar,
    });
  };

  render() {
    const { isSidebar, itemlist, selectFilter } = this.state;
    return (
      <>
        <HideBar isSidebar={isSidebar} />
        <div className="list">
          <div className="itemListPage">
            <Header />
            <FilterNav
              handleSideBar={this.handleSideBar}
              onClickFilter={this.onClickFilter}
              deleteFilter={this.deleteFilter}
              selectFilter={selectFilter}
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
