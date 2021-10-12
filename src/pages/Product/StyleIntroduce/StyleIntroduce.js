import React from 'react';
import './StyleIntroduce.scss';

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
                  src="http://localhost:3000/images/Product/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202021-10-07%20%EC%98%A4%EC%A0%84%201.37.16.png"
                />
              </li>
              <li>
                <img
                  alt="instar"
                  src="http://localhost:3000/images/Product/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202021-10-07%20%EC%98%A4%EC%A0%84%201.37.16.png"
                />
              </li>
              <li>
                <img
                  alt="instar"
                  src="http://localhost:3000/images/Product/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202021-10-07%20%EC%98%A4%EC%A0%84%201.37.16.png"
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
