import React from 'react';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="trendContent">
          <h3>최신 트렌드</h3>

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
            <div className="CampaignTeaser">
              <img src={'/images/main_img.jpeg'} alt="" />
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default Main;
