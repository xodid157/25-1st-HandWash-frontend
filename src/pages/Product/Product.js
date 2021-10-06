import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

class Product extends React.Component {
  render() {
    return (
      <main className="product">
        <section class="productMain">
          <article className="content">
            <ul className="mainImages">
              <li>
                <img alt="blackPants" src="./images/Product/hmgoepprod.jpeg" />
              </li>
              <li>
                <img
                  alt="blackPants"
                  src="./images/Product/hmgoepprod (1).jpeg"
                />
              </li>
            </ul>
            <div className="descriptiontBox">
              <span>
                스트리트 패션을 추구하는 Blank Staples는 하얀 캔버스처럼
                개개인의 개성과 창의력으로 재해석할 수 있는 프리미엄
                컬렉션입니다. 심플한 스타일의 조거 팬츠. 고급스러운 촉감의
                톡톡한 460g 오가닉 코튼 스웨트셔츠 소재. 고무밴드가 내장된
                허릿단과 아랫단. 저지 안감이 부착된 옆면 포켓, 뒷면 포켓.
              </span>
              <ul className="material">
                <li>
                  <span>구성: </span>
                  <span className="materialContent">코튼 100%</span>
                </li>
                <li>
                  <span>보다 지속 가능한 소재: </span>
                  <span className="materialContent">오가닉 코튼 100%</span>
                </li>
                <li>
                  <span>상품 번호: </span>
                  <span className="materialContent">0967542002</span>
                </li>
              </ul>
            </div>
            <ul className="RemainingImgs">
              <li>
                <img
                  alt="blackPants"
                  src="./images/Product/hmgoepprod (3).jpeg"
                />
              </li>
              <li>
                <img
                  alt="blackPants"
                  src="./images/Product/hmgoepprod (4).jpeg"
                />
              </li>
              <li>
                <img
                  alt="blackPants"
                  src="./images/Product/hmgoepprod (2).jpeg"
                />
              </li>
              <li>
                <img
                  alt="blackPants"
                  src="./images/Product/hmgoepprod (5).jpeg"
                />
              </li>
              <li>
                <img
                  alt="blackPants"
                  src="./images/Product/hmgoepprod (6).jpeg"
                />
              </li>
            </ul>
          </article>
          <article className="side">
            <div className="sideBox">
              <div className="sideNameBox">
                <span className="productName">코튼 조거 팬츠</span>
                {/* <i class="far fa-heart"></i> */}
                <i class="fas fa-heart"></i>
              </div>
              <div className="productPrice">
                <span>₩ 39,900</span>
              </div>
              <div className="productColor">
                <span>블랙</span>
              </div>
              <ul className="ProductColorImg">
                <li>
                  <img
                    alt="colors"
                    src="./images/Product/hmgoepprod (2).jpeg"
                  />
                </li>
                <li>
                  <img
                    alt="colors"
                    src="./images/Product/hmgoepprod (2).jpeg"
                  />
                </li>
                <li>
                  <img
                    alt="colors"
                    src="./images/Product/hmgoepprod (2).jpeg"
                  />
                </li>
                <li>
                  <img
                    alt="colors"
                    src="./images/Product/hmgoepprod (2).jpeg"
                  />
                </li>
                <li>
                  <img
                    alt="colors"
                    src="./images/Product/hmgoepprod (2).jpeg"
                  />
                </li>
                <li>
                  <img
                    alt="colors"
                    src="./images/Product/hmgoepprod (2).jpeg"
                  />
                </li>
                <li>
                  <img
                    alt="colors"
                    src="./images/Product/hmgoepprod (2).jpeg"
                  />
                </li>
              </ul>
              <div className="size">
                <button type="button">
                  <span>사이즈 선택</span>
                  <i className="fas fa-angle-down"></i>
                </button>
              </div>
              <div className="order">
                <button type="button">
                  <i class="fas fa-shopping-bag"></i>
                  <span>담기</span>
                </button>
              </div>
            </div>
          </article>
        </section>
        <section>
          <article className="contentInfo">
            <ul>
              <li>
                <button type="button">
                  <span>세부정보</span>
                </button>
              </li>
              <li>
                <button type="button">
                  <span>배송 및 결제</span>
                </button>
              </li>
              <li>
                <button type="button">
                  <span>제품 배경</span>
                </button>
              </li>
            </ul>
            <div>
              <span className="parcel">
                배송 기간: 1-2일 소요. 기본 5만원 이상 구매 시 무료 배송, 멤버십
                회원은 3만원 이상 구매 시 무료 배송 (플러스 회원은 항상 무료
                배송)
              </span>
            </div>
          </article>
          <article className="styleIntroduce">
            <div className="hwStyle">
              <div className="introduceText">
                <p>내가 만드는 스타일</p>
                <span>
                  H&W 및 H&W HOME의 페이버릿 아이템을 어떻게 스타일링하는지
                  보여주세요. @HW 및 #HWxME 해시태그를 사용해 나만의 스타일을
                  공유하고, hw.com과 마케팅 채널, 매장에 게시물이 실리는 기회를
                  잡으세요.
                </span>
              </div>
              <div className="introduceInstar">
                <ul>
                  <li>
                    <img
                      alt="instar"
                      src="./images/Product/스크린샷 2021-10-07 오전 1.37.16.png"
                    />
                  </li>
                  <li>
                    <img
                      alt="instar"
                      src="./images/Product/스크린샷 2021-10-07 오전 1.37.16.png"
                    />
                  </li>
                  <li>
                    <img
                      alt="instar"
                      src="./images/Product/스크린샷 2021-10-07 오전 1.37.16.png"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </article>
          <div className="styleRecommend">
            <div>
              <p>스타일</p>
            </div>
            <div className="styleBox">
              <div className="styleContent">
                <img
                  alt="styleImg"
                  src="https://lp2.hm.com/hmgoepprod?set=source[/21/32/21321c2f8521316f5775d75c54f2edb7420be33a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
                />
                <span className="blank">blank staples</span>
                <Link to="#" className="link">
                  코튼 스웨트 셔츠
                </Link>
                <span>₩ 39,900</span>
              </div>
              <div className="styleContent">
                <img
                  alt="styleImg"
                  src="https://lp2.hm.com/hmgoepprod?set=source[/21/32/21321c2f8521316f5775d75c54f2edb7420be33a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
                />
                <span className="blank">blank staples</span>
                <Link to="#" className="link">
                  코튼 스웨트 셔츠
                </Link>
                <span>₩ 39,900</span>
              </div>
              <div className="styleContent">
                <img
                  alt="styleImg"
                  src="https://lp2.hm.com/hmgoepprod?set=source[/21/32/21321c2f8521316f5775d75c54f2edb7420be33a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
                />
                <span className="blank">blank staples</span>
                <Link to="#" className="link">
                  코튼 스웨트 셔츠
                </Link>
                <span>₩ 39,900</span>
              </div>
              <div className="styleContent">
                <img
                  alt="styleImg"
                  src="https://lp2.hm.com/hmgoepprod?set=source[/21/32/21321c2f8521316f5775d75c54f2edb7420be33a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
                />
                <span className="blank">blank staples</span>
                <Link to="#" className="link">
                  코튼 스웨트 셔츠
                </Link>
                <span>₩ 39,900</span>
              </div>
            </div>
          </div>
          <div className="styleRecommend">
            <div>
              <p>기타 추천 제품</p>
            </div>
            <div className="styleBox">
              <div className="styleContent">
                <img
                  alt="styleImg"
                  src="https://lp2.hm.com/hmgoepprod?set=source[/e5/57/e557d535959e904bb1d0ee9661fc1b0e9f630a16.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
                />
                <span className="blank">blank staples</span>
                <Link to="#" className="link">
                  코튼 후드티
                </Link>
                <span>₩ 49,900</span>
                <span className="newItem">최신 상품</span>
              </div>
              <div className="styleContent">
                <img
                  alt="styleImg"
                  src="https://lp2.hm.com/hmgoepprod?set=source[/e5/57/e557d535959e904bb1d0ee9661fc1b0e9f630a16.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
                />
                <span className="blank">blank staples</span>
                <Link to="#" className="link">
                  코튼 후드티
                </Link>
                <span>₩ 49,900</span>
                <span className="newItem">최신 상품</span>
              </div>
              <div className="styleContent">
                <img
                  alt="styleImg"
                  src="https://lp2.hm.com/hmgoepprod?set=source[/e5/57/e557d535959e904bb1d0ee9661fc1b0e9f630a16.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
                />
                <span className="blank">blank staples</span>
                <Link to="#" className="link">
                  코튼 후드티
                </Link>
                <span>₩ 49,900</span>
                <span className="newItem">최신 상품</span>
              </div>
              <div className="styleContent">
                <img
                  alt="styleImg"
                  src="https://lp2.hm.com/hmgoepprod?set=source[/e5/57/e557d535959e904bb1d0ee9661fc1b0e9f630a16.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
                />
                <span className="blank">blank staples</span>
                <Link to="#" className="link">
                  코튼 후드티
                </Link>
                <span>₩ 49,900</span>
                <span className="newItem">최신 상품</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Product;
