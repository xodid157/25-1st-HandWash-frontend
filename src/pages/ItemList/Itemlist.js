import React from 'react';
import Item from './../ItemList/Item/Item';
import Listbar from './FilterBar/Listbar';
import HideBar from './Hidebar/HideBar';
import FilterSideBar from './FilterSideBar/FilterSideBar';
import FILTER_LIST from './FILTERLIST';
import './Itemlist.scss';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemlist: [],
      navlist: FILTER_LIST,
      isSidebar: false,
    };
  }

  // componentDidMount() {
  //   fetch('data/itemLists.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ itemlist: data });
  //     });
  // }

  componentDidMount() {
    fetch('http://172.30.1.12:8000/products/23', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          itemlist: [result],
        });
      });
  }

  handleSideBar = () => {
    const { isSidebar } = this.state;
    this.setState({
      isSidebar: !isSidebar,
    });
  };

  render() {
    const { navlist, isSidebar, itemlist } = this.state;
    return (
      <div className="list">
        {/* <div className="hide"> */}
        <HideBar isSidebar={isSidebar} />
        <div className="itemListPage">
          <div className="listName">
            <h1 className="title">모두보기</h1>
          </div>
          <div className="content">
            <p>
              1새로운 필터 기능을 사용해서 당신에게 딱 맞는 사이즈를 찾아보세요!
              영캐주얼부터 뷰티제품까지 다양하게 준비되어 있으니 지금 둘러보세요
            </p>
          </div>
          <div className="navFilter">
            <ul className="navi">
              {navlist.map((list, index) => (
                <Listbar
                  key={index}
                  bigname={list.bigname}
                  sname={list.sname}
                />
              ))}
              <div>
                <span className="hii" onClick={this.handleSideBar}>
                  모든 필터
                </span>
              </div>
            </ul>
            <FilterSideBar />
          </div>
          <ul className="items">
            {itemlist.map(item => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.main_image}
                color={item.color}
                is_new={item.is_new}
                is_conscious={item.is_conscious}
              />
            ))}
          </ul>
          <div>
            <button className="showMoreBtn">더 많은 제품 보기</button>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}
export default ItemList;
