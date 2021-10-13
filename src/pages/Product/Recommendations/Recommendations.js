import React from 'react';
import { Link } from 'react-router-dom';
import './Recommendations.scss';

class Recommendations extends React.Component {
  render() {
    const styleContent = [
      {
        id: 1,
        url: 'https://lp2.hm.com/hmgoepprod?set=source[/e5/57/e557d535959e904bb1d0ee9661fc1b0e9f630a16.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
        name: '코튼 후드티',
        price: '49,900',
        is_new: 1,
      },
      {
        id: 2,
        url: 'https://lp2.hm.com/hmgoepprod?set=source[/e5/57/e557d535959e904bb1d0ee9661fc1b0e9f630a16.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
        name: '코튼 후드티',
        price: '49,900',
        is_new: 1,
      },
      {
        id: 3,
        url: 'https://lp2.hm.com/hmgoepprod?set=source[/e5/57/e557d535959e904bb1d0ee9661fc1b0e9f630a16.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
        name: '코튼 후드티',
        price: '49,900',
        is_new: 1,
      },
      {
        id: 4,
        url: 'https://lp2.hm.com/hmgoepprod?set=source[/e5/57/e557d535959e904bb1d0ee9661fc1b0e9f630a16.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
        name: '코튼 후드티',
        price: '49,900',
        is_new: 1,
      },
    ];
    return (
      <article className="recommendations">
        <div>
          <p>기타 추천 제품</p>
        </div>
        <ul className="styleBox">
          {styleContent.map(content => (
            <li className="styleContent" key={content.id}>
              <div className="box">
                <img alt="styleImg" src={content.url} />
                <i className="fas fa-heart"></i>
              </div>
              <span className="blank">blank staples</span>
              <Link to="#" className="link">
                {content.name}
              </Link>
              <span>₩ {content.price}</span>
              <span className="newItem">최신 상품</span>
            </li>
          ))}
        </ul>
      </article>
    );
  }
}

export default Recommendations;
