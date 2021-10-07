import React from 'react';
import { Link } from 'react-router-dom';
import './Itemlist.scss';

class Item extends React.Component {
  render() {
    const { name, price, img } = this.props;
    return (
      <li className="item">
        <div className="itemImg">
          <Link to="#">
            <img src={img} alt={name} />
          </Link>
          <div className="imgInPrice">
            <p>{price}</p>
          </div>
          <i class="fas fa-heart fa-2x"></i>
        </div>
        <div className="itemText">
          <div className="ex">Conscious</div>
          <div className="itemName">
            <Link to="#">{name}</Link>
          </div>
          <div className="itemprice">{price}</div>
          <div className="itemColor">
            <Link to="#">
              <div></div>
            </Link>
            <Link to="#">
              <div></div>
            </Link>
          </div>
          <div className="newItem">신제품</div>
        </div>
      </li>
    );
  }
}

class ItemList extends React.Component {
  render() {
    return (
      <div className="list">
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
          <div className="bigfilter">
            <div className="navFilter">
              <ul class="navi">
                <li>
                  <Link to="#">정렬 기준</Link>
                  <ul>
                    <li>
                      <Link to="#">추천</Link>
                    </li>
                    <li>
                      <Link to="#">최신순</Link>
                    </li>
                    <li>
                      <Link to="#">낮은 가격</Link>
                    </li>
                    <li>
                      <Link to="#">높은 가격</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">사이즈</Link>
                  <ul>
                    <li>
                      <Link to="#">XS</Link>
                    </li>
                    <li>
                      <Link to="#">S</Link>
                    </li>
                    <li>
                      <Link to="#">M</Link>
                    </li>
                    <li>
                      <Link to="#">L</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">컬러</Link>
                  <ul>
                    <li>
                      <Link to="#">RED</Link>
                    </li>
                    <li>
                      <Link to="#">BLUE</Link>
                    </li>
                    <li>
                      <Link to="#">BLACK</Link>
                    </li>
                    <li>
                      <Link to="#">PPPPPPP</Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="navFilterRight">
                <div className="itemListNum">1234아이템</div>
                <div>
                  <a href="#">모델</a>
                </div>
                <div>
                  <a href="#">제품</a>
                </div>
                <div>
                  <a href="#">
                    <i class="far fa-square"></i>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <i class="fas fa-th-large"></i>
                  </a>
                </div>
              </div>
            </div>
            <ul className="items">
              {LIST.map(item => (
                <Item
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemList;

const LIST = [
  {
    id: 1,
    name: '리브니트 울 블랜드 드레스',
    price: 'W77,000',
    img: 'images/1111.jpeg',
  },
  {
    id: 1,
    name: '리브니트 울 블랜드 드레스',
    price: 'W77,000',
    img: 'images/1111.jpeg',
  },
  {
    id: 1,
    name: '리브니트 울 블랜드 드레스',
    price: 'W77,000',
    img: 'images/1111.jpeg',
  },
  {
    id: 1,
    name: '리브니트 울 블랜드 드레스',
    price: 'W77,000',
    img: 'images/1111.jpeg',
  },
  {
    id: 1,
    name: '리브니트 울 블랜드 드레스',
    price: 'W77,000',
    img: 'images/1111.jpeg',
  },
  {
    id: 1,
    name: '리브니트 울 블랜드 드레스',
    price: 'W77,000',
    img: 'images/1111.jpeg',
  },
  {
    id: 1,
    name: '리브니트 울 블랜드 드레스',
    price: 'W77,000',
    img: 'images/1111.jpeg',
  },
  {
    id: 1,
    name: '리브니트 울 블랜드 드레스',
    price: 'W77,000',
    img: 'images/1111.jpeg',
  },
];
