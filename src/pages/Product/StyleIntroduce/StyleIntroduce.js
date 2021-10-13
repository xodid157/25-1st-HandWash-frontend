import React from 'react';

class StyleIntroduce extends React.Component {
  render() {
    return (
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
    );
  }
}

export default StyleIntroduce;
