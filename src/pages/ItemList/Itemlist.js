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
    const filters = [
      { text: '추천', type: 'sort' },
      { text: '최신', type: 'sort' },
      { text: '낮은가격', type: 'sort' },
      { text: '높은가격', type: 'sort' },
      { text: 'conscious', type: 'conscious' },
      { text: 'XS', type: 'size' },
      { text: 'S', type: 'size' },
      { text: 'M', type: 'size' },
      { text: 'L', type: 'size' },
      { text: '화이트', type: 'color' },
      { text: '레드', type: 'color' },
      { text: '블루', type: 'color' },
      { text: '차콜', type: 'color' },
      { text: '스카이블루', type: 'color' },
      { text: '옐로우', type: 'color' },
      { text: '브라운', type: 'color' },
      { text: '네이비', type: 'color' },
      { text: '그린', type: 'color' },
      { text: '블랙', type: 'color' },
    ];

    return filters.find(f => f.text === filter).type;
  };

  changeFilterName = filter => {
    const filterTable = {
      낮은가격: 'ascPrice',
      높은가격: 'descPrice',
      최신: 'recent',
      conscious: 'True',
    };

    return filterTable[filter] ?? filter;
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
    //if조건에 필터링만 되어있어서 페이징기능이 안먹혔던거 조건추가함
    //작동되는지는 서버연결안되서 아직 확인불가 ㅠㅠ
    if (
      prevState.selectFilter !== this.state.selectFilter ||
      prevState.limit !== this.state.limit
    ) {
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
    // const page = `limit=${limit + 8}&offset=0`;
    // fetch(`${API.products}?${page}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ itemlist: data.products });
    //   });
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
