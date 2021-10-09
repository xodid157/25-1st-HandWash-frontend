import React from 'react';
import { Link } from 'react-router-dom';
import Item from './../ItemList/Item/Item';
import Listbar from './FilterBar/Listbar';
import HideBar from './Hidebar/HideBar';
import FILTER_LIST from './FILTERLIST';
import './Itemlist.scss';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navlist: FILTER_LIST,
      isSidebar: false,
    };
  }

  handleSideBar = () => {
    const { isSidebar } = this.state;
    this.setState({
      isSidebar: !isSidebar,
    });
  };

  render() {
    const { navlist, isSidebar } = this.state;
    return (
      <div className="list">
        <HideBar isSidebar={isSidebar} />
        <div className="itemListPage">
          <div className="listName">
            <h1 className="title">모두보기</h1>
          </div>
          <div className="content">
            <p>
              새로운 필터 기능을 사용해서 당신에게 딱 맞는 사이즈를 찾아보세요!
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
            <div className="navFilterRight">
              <div className="itemListNum">1234아이템</div>
              <div>
                <Link to="#">모델</Link>
              </div>
              <div>
                <Link to="#">제품</Link>
              </div>
              <div>
                <Link to="#">
                  <i className="far fa-square"></i>
                </Link>
              </div>
              <div>
                <Link to="#">
                  <i className="fas fa-th-large"></i>
                </Link>
              </div>
            </div>
          </div>
          <ul className="items">
            {ITEM_LIST.map(item => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                colors={item.colors}
              />
            ))}
          </ul>
          <div>
            <button className="showMoreBtn">더 많은 제품 보기</button>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemList;

const ITEM_LIST = [
  {
    id: 1,
    name: '리브니트 울 블랜드 드레스',
    price: 'W77,000',
    img: 'images/1111.jpeg',
    colors: ['red', 'blue'],
  },
  {
    id: 2,
    name: '리브니트 울 블랜드 드레스',
    price: 'W77,000',
    img: 'images/1111.jpeg',
    colors: [],
  },
  {
    id: 3,
    name: '리브니트 울 블랜드 드레스',
    price: 'W77,000',
    img: 'images/1111.jpeg',
    colors: ['red', 'red', 'red'],
  },
  {
    id: 4,
    name: '리브니트 울 블랜드 드레스',
    price: 'W77,000',
    img: 'images/1111.jpeg',
    colors: ['blue', 'blue'],
  },
  {
    id: 5,
    name: '리브니트 울 블랜드 드레스',
    price: 'W77,000',
    img: 'images/1111.jpeg',
    colors: ['blue', 'red', 'blue'],
  },
  {
    id: 6,
    name: '리브니트 울 블랜드 드레스',
    price: 'W77,000',
    img: 'images/1111.jpeg',
    colors: [],
  },
  {
    id: 7,
    name: '리브니트 울 블랜드 드레스',
    price: 'W77,000',
    img: 'images/1111.jpeg',
    colors: ['red', 'red', 'red', 'red'],
  },
  {
    id: 8,
    name: '리브니트 울 블랜드 드레스',
    price: 'W77,000',
    img: 'images/1111.jpeg',
    colors: [],
  },
];
