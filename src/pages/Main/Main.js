import React from 'react';
import { Link } from 'react-router-dom';
import Magazin from '../../components/Magazin/Magazin';
import './Main.scss';
import '../../components/Magazin/Magazin.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <main>
          <div className="trendContent">
            <h3 className="trendTitle">최신 트렌드</h3>

            <div className="trendImgContent">
              <i class="fas fa-arrow-left"></i>
              <ul className="trendImg">
                <li>
                  <img
                    src="https://www2.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10217.png"
                    alt=""
                  />
                  <div className="categoryTitleContent">
                    <p className="category">여성</p>
                    <p>가디건 & 풀오버</p>
                  </div>
                </li>
                <li>
                  <img
                    src="https://www2.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10217.png"
                    alt=""
                  />
                  <div className="categoryTitleContent">
                    <p className="category">여성</p>
                    <p>가디건 & 풀오버</p>
                  </div>
                </li>
                <li>
                  <img
                    src="https://www2.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10217.png"
                    alt=""
                  />
                  <div className="categoryTitleContent">
                    <p className="category">여성</p>
                    <p>가디건 & 풀오버</p>
                  </div>
                </li>
                <li>
                  <img
                    src="https://www2.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10217.png"
                    alt=""
                  />
                  <div className="categoryTitleContent">
                    <p className="category">여성</p>
                    <p>가디건 & 풀오버</p>
                  </div>
                </li>
                <li>
                  <img
                    src="https://www2.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10217.png"
                    alt=""
                  />
                  <div className="categoryTitleContent">
                    <p className="category">여성</p>
                    <p>가디건 & 풀오버</p>
                  </div>
                </li>
                <li>
                  <img
                    src="https://www2.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10217.png"
                    alt=""
                  />
                  <div className="categoryTitleContent">
                    <p className="category">여성</p>
                    <p>가디건 & 풀오버</p>
                  </div>
                </li>
                <li>
                  <img
                    src="https://www2.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10217.png"
                    alt=""
                  />
                  <div className="categoryTitleContent">
                    <p className="category">여성</p>
                    <p>가디건 & 풀오버</p>
                  </div>
                </li>
                <li>
                  <img
                    src="https://www2.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10217.png"
                    alt=""
                  />
                  <div className="categoryTitleContent">
                    <p className="category">여성</p>
                    <p>가디건 & 풀오버</p>
                  </div>
                </li>
              </ul>
              <i class="fas fa-arrow-right"></i>
            </div>

            <section>
              <div className="campaignLayout">
                <div className="campaignContent">
                  <img src={'/images/main_img.jpeg'} alt="" />
                  <div>
                    <h3>
                      가을 머스트 <b>&#x002D;</b> 해브
                    </h3>
                    <p>
                      멋스러운 니트, 재킷, 가디건 등 시즌 인기 아이템을 지금
                      만나보세요.
                    </p>

                    <Link to="/">쇼핑하기</Link>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="campaignLayout">
                <div className="campaignContent">
                  <img src={'/images/main_img.jpeg'} alt="" />
                  <div>
                    <h3>HandWash</h3>
                    <p>
                      Kim Minho / Seo Donghyeok / Shin hyeri <br />
                      Lee Dabeen / Jeon Taeyang / Cho Yunhui
                    </p>

                    <Link to="/">지금 쇼핑하기</Link>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="banners">
                <h3>
                  친구 <b>1</b>명 <b>= 50</b> 포인트 <br /> 뉴스레터
                  <b>&#x0026;APP</b> 혜택까지&#x2665;
                </h3>
                <p>
                  멤버십 친구 초대 시 50 포인트 증정&#x0026;최신 소식을 가장
                  먼저 만나보세요!
                </p>
                <Link to="/">로그인</Link>
              </div>
            </section>
          </div>
        </main>
        <section className="magazineContent">
          <h2>MAGAZINE</h2>
          <h3>A WORLD OF INSPIRATION</h3>
          <a href="" className="magazineLink">
            READ H&#x0026;W MAGAZINE
          </a>

          <div className="magazinCardList">
            <Magazin />
          </div>
        </section>
      </>
    );
  }
}

export default Main;
