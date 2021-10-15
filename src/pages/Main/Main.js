import React from 'react';
import { Link } from 'react-router-dom';
import Magazine from './Magazine/Magazine';
import Campaign from './Campaign/Campaign';
import Trend from './Trend';

import './Main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      magazineList: [],
      trendList: [],
      campaignList: [],

      imgSpot: 0,
    };
  }

  componentDidMount() {
    fetch('data/magazineData.json')
      .then(magazine => magazine.json())
      .then(data =>
        this.setState({
          magazineList: data,
        })
      );

    fetch('data/trendData.json')
      .then(trend => trend.json())
      .then(data =>
        this.setState({
          trendList: data,
        })
      );

    fetch('data/campaignData.json')
      .then(campaign => campaign.json())
      .then(data =>
        this.setState({
          campaignList: data,
        })
      );
  }

  imgCaroselBtn = imgSpotNumber => {
    const { trendList } = this.state;
    if (trendList.length - 5 <= imgSpotNumber) imgSpotNumber = 0;
    if (imgSpotNumber < 0) imgSpotNumber = trendList.length - 6;
    this.setState({
      imgSpot: imgSpotNumber,
    });
  };

  render() {
    const { magazineList, trendList, campaignList, imgSpot } = this.state;
    const CONTENT_WIDTH = 120.131;

    return (
      <>
        <main className="main">
          <div className="trendContent">
            <h3 className="trendTitle">최신 트렌드</h3>

            <div className="trendCarousel">
              <ul
                className="trendImgContainer"
                style={{
                  transform: `translateX(
                ${imgSpot * -CONTENT_WIDTH}px`,
                }}
              >
                {trendList.map((trend, idx) => {
                  return (
                    <Trend
                      key={idx}
                      category={trend.category}
                      categoryTitle={trend.categoryTitle}
                      img={trend.img}
                    />
                  );
                })}
              </ul>

              <div className="trendBtn">
                <i
                  className="fas fa-arrow-left"
                  onClick={() => this.imgCaroselBtn(imgSpot - 1)}
                ></i>
                <i
                  className="fas fa-arrow-right"
                  onClick={() => this.imgCaroselBtn(imgSpot + 1)}
                ></i>
              </div>
            </div>

            <section>
              {campaignList.map((campaign, idx) => {
                return (
                  <Campaign
                    key={idx}
                    campaignTitle={campaign.campaignTitle}
                    campaignContents={campaign.campaignContents}
                    linkTitle={campaign.linkTitle}
                    campaignImg={campaign.campaignImg}
                  />
                );
              })}
            </section>

            <section>
              <div className="banners">
                <h3>
                  깐부 <b>1</b>명 <b>= 50</b> 포인트 <br /> 뉴스레터
                  <b>&#x0026;APP</b> 혜택까지&#x2665;
                </h3>
                <p>
                  멤버십 깐부 초대 시 50 포인트 증정&#x0026;최신 소식을 가장
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
          <Link to="/" className="magazineLink">
            READ H&#x0026;W MAGAZINE
          </Link>

          <div className="magazineCardList">
            {magazineList.map((magazine, idx) => {
              return (
                <Magazine
                  key={idx}
                  heading={magazine.heading}
                  cardLink={magazine.cardLink}
                  magazineImg={magazine.magazineImg}
                />
              );
            })}
          </div>
        </section>
      </>
    );
  }
}

export default Main;
