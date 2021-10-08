import React from 'react';
import { Link } from 'react-router-dom';

class Recommendations extends React.Component {
  render() {
    return (
      <article className="styleRecommend">
        <div>
          <p>기타 추천 제품</p>
        </div>
        <div className="styleBox">
          <div className="styleContent">
            <div className="box">
              <img
                alt="styleImg"
                src="https://lp2.hm.com/hmgoepprod?set=source[/e5/57/e557d535959e904bb1d0ee9661fc1b0e9f630a16.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
              />
              <i class="fas fa-heart"></i>
            </div>
            <span className="blank">blank staples</span>
            <Link to="#" className="link">
              코튼 후드티
            </Link>
            <span>₩ 49,900</span>
            <span className="newItem">최신 상품</span>
          </div>
          <div className="styleContent">
            <div className="box">
              <img
                alt="styleImg"
                src="https://lp2.hm.com/hmgoepprod?set=source[/e5/57/e557d535959e904bb1d0ee9661fc1b0e9f630a16.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
              />
              <i class="fas fa-heart"></i>
            </div>
            <span className="blank">blank staples</span>
            <Link to="#" className="link">
              코튼 후드티
            </Link>
            <span>₩ 49,900</span>
            <span className="newItem">최신 상품</span>
          </div>
          <div className="styleContent">
            <div className="box">
              <img
                alt="styleImg"
                src="https://lp2.hm.com/hmgoepprod?set=source[/e5/57/e557d535959e904bb1d0ee9661fc1b0e9f630a16.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
              />
              <i class="fas fa-heart"></i>
            </div>
            <span className="blank">blank staples</span>
            <Link to="#" className="link">
              코튼 후드티
            </Link>
            <span>₩ 49,900</span>
            <span className="newItem">최신 상품</span>
          </div>
          <div className="styleContent">
            <div className="box">
              <img
                alt="styleImg"
                src="https://lp2.hm.com/hmgoepprod?set=source[/e5/57/e557d535959e904bb1d0ee9661fc1b0e9f630a16.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
              />
              <i class="fas fa-heart"></i>
            </div>
            <span className="blank">blank staples</span>
            <Link to="#" className="link">
              코튼 후드티
            </Link>
            <span>₩ 49,900</span>
            <span className="newItem">최신 상품</span>
          </div>
        </div>
      </article>
    );
  }
}

export default Recommendations;
