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
      selected: '',
    };
  }

  //  더 간단한 방법???? 너무복잡해
  findFilterUl = filter => {
    if (
      '추천' === filter ||
      '최신' === filter ||
      '낮은가격' === filter ||
      '높은가격' === filter
    ) {
      return 'sort';
    } else if (filter === 'conscious') {
      return 'CONSCIOUS';
    } else if (
      filter === 'XS' ||
      filter === 'S' ||
      filter === 'M' ||
      filter === 'L'
    ) {
      return 'size';
    } else if (
      filter === '블랙' ||
      filter === '화이트' ||
      filter === '레드' ||
      filter === '블루' ||
      filter === '차콜' ||
      filter === '스카이블루' ||
      filter === '옐로우' ||
      filter === '브라운' ||
      filter === '네이비' ||
      filter === '그린'
    ) {
      return 'color';
    }
  };

  componentDidMount() {
    fetch('data/itemLists.json')
      // fetch('http://10.58.4.132:8000/products/')
      .then(res => res.json())
      .then(data => {
        this.setState({ itemlist: data });
      });
  }

  showMoreItem = () => {};

  onClickFilter = e => {
    const filterText = e.target.innerText;
    const { selectFilter, selected } = this.state;

    this.setState({
      selectFilter: [...selectFilter, filterText],
      selected: filterText,
    });

    const xy = selectFilter
      .map(filterName => `?${this.findFilterUl(filterName)}=${filterName}&`)
      .join('')
      .slice(0, -1);

    console.log(xy);

    // const yy = `${this.findFilterUl(selected)}=${selected}&`;

    // console.log(yy.slice(0, -1));

    // fetch(`${APi}/products/?${xy}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       itemlist: data,
    //     });
    //   });
  };

  deleteFilter = e => {
    const { selectFilter } = this.state;

    this.setState({
      selectFilter: selectFilter.filter(select => {
        console.log(select, e.target.dataset.index, e);
        return select.key !== e.target.id;
      }),
    });
  };
  // 삭제했을때 위의 필터리스트 배열에서도 삭제하는방법???..

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
            <Items itemlist={itemlist} showMoreItem={this.showMoreItem} />
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
