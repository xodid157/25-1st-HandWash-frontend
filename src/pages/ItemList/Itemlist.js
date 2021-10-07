import React from 'react';
import './Itemlist.scss';

class Item extends React.Component {
  render() {
    return <></>;
  }
}

class ItemList extends React.Component {
  //List =>(id,img,name,price,color,new,)
  // constructor(props){
  //   super(props)
  //   this.state={
  //     itemList,
  //   }
  // }

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
          <div className="navFilter">
            <ul class="navi">
              <li>
                <a href="#">정렬 기준</a>
                <ul>
                  <li>
                    <a href="#">추천</a>
                  </li>
                  <li>
                    <a href="#">최신순</a>
                  </li>
                  <li>
                    <a href="#">낮은 가격</a>
                  </li>
                  <li>
                    <a href="#">높은 가격</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">사이즈</a>
                <ul>
                  <li>
                    <a href="#">XS</a>
                  </li>
                  <li>
                    <a href="#">S</a>
                  </li>
                  <li>
                    <a href="#">M</a>
                  </li>
                  <li>
                    <a href="#">L</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">컬러</a>
                <ul>
                  <li>
                    <a href="#">RED</a>
                  </li>
                  <li>
                    <a href="#">BLUE</a>
                  </li>
                  <li>
                    <a href="#">BLACK</a>
                  </li>
                  <li>
                    <a href="#">PPPPPPP</a>
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
            <li className="item">
              <div className="itemImg">
                {/* 나중에 Link 태그로 변경 예정 */}
                <a href="#">
                  <img src="images/1111.jpeg" />
                </a>
                <div className="imgInPrice">
                  <p>W77,000</p>
                </div>
                <i class="fas fa-heart fa-2x"></i>
              </div>
              <div className="itemText">
                <div className="ex">Conscious</div>
                <div className="itemName">
                  {/* 나중에 Link 태그로 변경 예정 */}
                  <a href="#">리브니트 울 블랜드 드레스</a>
                </div>
                <div className="itemprice">W77,000</div>
                <div className="itemColor">
                  {/* 나중에 Link 태그로 변경 예정 */}
                  <a href="#">x</a>
                  <a href="#">x</a>
                  <a href="#">x</a>
                </div>
                <div className="newItem">신제품</div>
              </div>
            </li>
            <li className="item">
              <div className="itemImg">
                <a href="#">
                  <img src="images/1111.jpeg" />
                </a>
                <div className="imgInPrice">
                  <p>W77,000</p>
                </div>
                <i class="far fa-heart fa-2x"></i>
              </div>
              <div className="itemText">
                <div className="ex">Conscious</div>
                <div className="itemName">
                  {/* 나중에 Link 태그로 변경 예정 */}
                  <a href="#">리브니트 울 블랜드 드레스</a>
                </div>
                <div className="itemprice">W77,000</div>
                <div className="itemColor">
                  {/* 나중에 Link 태그로 변경 예정 */}
                  <a href="#">x</a>
                  <a href="#">x</a>
                  <a href="#">x</a>
                </div>
                <div className="newItem">신제품</div>
              </div>
            </li>
            <li className="item">
              <div className="itemImg">
                <a href="#">
                  <img src="images/1111.jpeg" />
                </a>
                <div className="imgInPrice">
                  <p>W77,000</p>
                </div>
                <i class="far fa-heart fa-2x"></i>
              </div>
              <div className="itemText">
                <div className="ex">Conscious</div>
                <div className="itemName">
                  {/* 나중에 Link 태그로 변경 예정 */}
                  <a href="#">리브니트 울 블랜드 드레스</a>
                </div>
                <div className="itemprice">W77,000</div>
                <div className="itemColor">
                  {/* 나중에 Link 태그로 변경 예정 */}
                  <a href="#">x</a>
                  <a href="#">x</a>
                  <a href="#">x</a>
                </div>
                <div className="newItem">신제품</div>
              </div>
            </li>
            <li className="item">
              <div className="itemImg">
                <a href="#">
                  <img src="images/1111.jpeg" />
                </a>
                <div className="imgInPrice">
                  <p>W77,000</p>
                </div>
                <i class="far fa-heart fa-2x"></i>
              </div>
              <div className="itemText">
                <div className="ex">Conscious</div>
                <div className="itemName">
                  {/* 나중에 Link 태그로 변경 예정 */}
                  <a href="#">리브니트 울 블랜드 드레스</a>
                </div>
                <div className="itemprice">W77,000</div>
                <div className="itemColor">
                  {/* 나중에 Link 태그로 변경 예정 */}
                  <a href="#">x</a>
                  <a href="#">x</a>
                  <a href="#">x</a>
                </div>
                <div className="newItem">신제품</div>
              </div>
            </li>
            <li className="item">
              <div className="itemImg">
                <a href="#">
                  <img src="images/1111.jpeg" />
                </a>
                <div className="imgInPrice">
                  <p>W77,000</p>
                </div>
                <i class="far fa-heart fa-2x"></i>
              </div>
              <div className="itemText">
                <div className="ex">Conscious</div>
                <div className="itemName">
                  {/* 나중에 Link 태그로 변경 예정 */}
                  <a href="#">리브니트 울 블랜드 드레스</a>
                </div>
                <div className="itemprice">W77,000</div>
                <div className="itemColor">
                  {/* 나중에 Link 태그로 변경 예정 */}
                  <a href="#">x</a>
                  <a href="#">x</a>
                  <a href="#">x</a>
                </div>
                <div className="newItem">신제품</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default ItemList;

// const List = [
//   {id: , img:'' , name:,price:,color:,isnew:,}
// ]
