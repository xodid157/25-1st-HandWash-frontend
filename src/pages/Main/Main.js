import React from 'react';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
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
            <div className="campaignTeaser">
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

                  <a href="">쇼핑하기</a>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="campaignTeaser">
              <div className="campaignContent">
                <img src={'/images/main_img.jpeg'} alt="" />
                <div>
                  <h3>HandWash</h3>
                  <p>
                    Kim Minho / Seo Donghyeok / Shin hyeri <br />
                    Lee Dabin / Jeon Taeyang / Jo Yunhui
                  </p>

                  <a href="">지금 쇼핑하기</a>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="campaignTeaser">
              <div className="campaignContent">
                <img src={'/images/main_img.jpeg'} alt="" />
                <div>
                  <h3>HandWash</h3>
                  <p>
                    Kim Minho / Seo Donghyeok / Shin hyeri <br />
                    Lee Dabin / Jeon Taeyang / Jo Yunhui
                  </p>

                  <a href="">지금 쇼핑하기</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default Main;
