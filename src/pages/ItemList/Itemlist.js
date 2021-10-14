import React from 'react';
import HideBar from './Hidebar/HideBar';
import FilterNav from './FilterNav/FilterNav';
import Header from './Header/Header';
import Items from './Items/Items';
import API from '../../config';
import './Itemlist.scss';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemlist: [],
      isSidebar: false,
      selectFilter: [],
      limit: 24,
    };
  }

  findFilterUl = filter => {
    if (
      '추천' === filter ||
      '최신' === filter ||
      '낮은가격' === filter ||
      '높은가격' === filter
    ) {
      return 'sort';
    } else if (filter === 'conscious') {
      return 'conscious';
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

  changeFilterName = filter => {
    if (filter === '낮은가격') {
      return 'ascPrice';
    } else if (filter === '높은가격') {
      return 'descPrice';
    } else if (filter === '최신') {
      return 'recent';
    } else if (filter === 'conscious') {
      return 'True';
    } else {
      return filter;
    }
  };

  componentDidMount() {
    // fetch('data/itemLists.json')
    fetch(`${API.products}?`)
      .then(res => res.json())
      .then(data => {
        this.setState({ itemlist: data.products });
      });
  }

  componentDidUpdate(_, prevState) {
    const { selectFilter, limit } = this.state;
    const page = `limit=${limit}&offset=0`;
    const filteredData = selectFilter
      .map(
        filterName =>
          `${this.findFilterUl(filterName)}=${this.changeFilterName(
            filterName
          )}&`
      )
      .join('')
      .slice(0, -1);

    if (prevState.selectFilter !== this.state.selectFilter) {
      fetch(`${API.products}?${filteredData}&${page}`)
        .then(res => res.json())
        .then(data => {
          this.setState({ itemlist: data.products });
        });
    }
  }

  showMoreItem = () => {
    const { limit } = this.state;

    this.setState({ limit: limit + 8 });
    const page = `limit=${limit + 8}&offset=0`;

    // this.props.history.push(`${page}`);

    fetch(`${API.products}?${page}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ itemlist: data.products });
      });
  };

  onClickFilter = e => {
    const filterText = e.currentTarget.innerText;
    const { selectFilter } = this.state;

    this.setState({
      selectFilter: [...selectFilter, filterText],
    });
  };

  deleteFilter = selected => {
    const { selectFilter } = this.state;

    this.setState({
      selectFilter: selectFilter.filter(select => {
        return select !== selected;
      }),
    });
  };

  handleSideBar = () => {
    const { isSidebar } = this.state;
    this.setState({
      isSidebar: !isSidebar,
    });
  };

  render() {
    const { isSidebar, itemlist, selectFilter, limit } = this.state;

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
              total={itemlist.length}
            />
            <Items
              itemlist={itemlist}
              showMoreItem={this.showMoreItem}
              limit={limit}
            />
          </div>
        </div>
      </>
    );
  }
}
export default ItemList;
