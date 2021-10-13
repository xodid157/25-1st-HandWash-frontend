import React from 'react';
import { Link } from 'react-router-dom';
import Magazine from '../../components/Magazine/Magazine';
import Campaign from '../../components/Campaign/Campaign';
import Trend from '../../components/Trend/Trend';
import './Main.scss';
import '../../components/Magazine/Magazine.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      magazineList: [],
      trendList: [],
      campaignList: [],
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

  render() {
    const { magazineList, trendList, campaignList } = this.state;
    return (
      <>
        <main className="main">
          <div className="trendContent">
            <h3 className="trendTitle">최신 트렌드</h3>

            <div className="trendImgContent">
              <i className="fas fa-arrow-left"></i>
              <ul className="trendImg">
                {trendList.map((trend, idx) => {
                  return (
                    <Trend
                      key={idx}
                      category={trend.category}
                      categoryTitle={trend.categoryTitle}
                    />
                  );
                })}
              </ul>
              <i className="fas fa-arrow-right"></i>
            </div>

            <section>
              {campaignList.map((campaign, idx) => {
                return (
                  <Campaign
                    key={idx}
                    campaignTitle={campaign.campaignTitle}
                    campaignContents={campaign.campaignContents}
                    linkTitle={campaign.linkTitle}
                  />
                );
              })}
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
