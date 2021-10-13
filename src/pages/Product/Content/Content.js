import React from 'react';

class Content extends React.Component {
  render() {
    return (
      <article className="content">
        <ul className="mainImages">
          <li>
            <img alt="blackPants" src="./images/Product/hmgoepprod.jpeg" />
          </li>
          <li>
            <img alt="blackPants" src="./images/Product/hmgoepprod (1).jpeg" />
          </li>
        </ul>
        <div className="descriptiontBox">
          <span>
            스트리트 패션을 추구하는 Blank Staples는 하얀 캔버스처럼 개개인의
            개성과 창의력으로 재해석할 수 있는 프리미엄 컬렉션입니다. 심플한
            스타일의 조거 팬츠. 고급스러운 촉감의 톡톡한 460g 오가닉 코튼
            스웨트셔츠 소재. 고무밴드가 내장된 허릿단과 아랫단. 저지 안감이
            부착된 옆면 포켓, 뒷면 포켓.
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
            <img alt="blackPants" src="./images/Product/hmgoepprod (3).jpeg" />
          </li>
          <li>
            <img alt="blackPants" src="./images/Product/hmgoepprod (4).jpeg" />
          </li>
          <li>
            <img alt="blackPants" src="./images/Product/hmgoepprod (2).jpeg" />
          </li>
          <li>
            <img alt="blackPants" src="./images/Product/hmgoepprod (5).jpeg" />
          </li>
          <li>
            <img alt="blackPants" src="./images/Product/hmgoepprod (6).jpeg" />
          </li>
        </ul>
      </article>
    );
  }
}

export default Content;
