import React from 'react';
import { Link } from 'react-router-dom';
import './StyleRecommend.scss';

class StyleRecommend extends React.Component {
  render() {
    const styleContent = [
      {
        id: 1,
        url: 'https://lp2.hm.com/hmgoepprod?set=source[/21/32/21321c2f8521316f5775d75c54f2edb7420be33a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
        name: '코튼 스웨트 셔츠',
        price: '39,900',
        is_new: 0,
      },
      {
        id: 2,
        url: 'https://lp2.hm.com/hmgoepprod?set=source[/21/32/21321c2f8521316f5775d75c54f2edb7420be33a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
        name: '코튼 스웨트 셔츠',
        price: '39,900',
        is_new: 0,
      },
      {
        id: 3,
        url: 'https://lp2.hm.com/hmgoepprod?set=source[/21/32/21321c2f8521316f5775d75c54f2edb7420be33a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
        name: '코튼 스웨트 셔츠',
        price: '39,900',
        is_new: 0,
      },
      {
        id: 4,
        url: 'https://lp2.hm.com/hmgoepprod?set=source[/21/32/21321c2f8521316f5775d75c54f2edb7420be33a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
        name: '코튼 스웨트 셔츠',
        price: '39,900',
        is_new: 0,
      },
      // {
      //   id: 5,
      //   url: 'https://lp2.hm.com/hmgoepprod?set=source[/21/32/21321c2f8521316f5775d75c54f2edb7420be33a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
      //   name: '코튼 스웨트 셔츠',
      //   price: '39,900',
      //   is_new: 0,
      // },
      // {
      //   id: 6,
      //   url: 'https://lp2.hm.com/hmgoepprod?set=source[/21/32/21321c2f8521316f5775d75c54f2edb7420be33a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
      //   name: '코튼 스웨트 셔츠',
      //   price: '39,900',
      //   is_new: 0,
      // },
      // {
      //   id: 7,
      //   url: 'https://lp2.hm.com/hmgoepprod?set=source[/21/32/21321c2f8521316f5775d75c54f2edb7420be33a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
      //   name: '코튼 스웨트 셔츠',
      //   price: '39,900',
      //   is_new: 0,
      // },
      // {
      //   id: 8,
      //   url: 'https://lp2.hm.com/hmgoepprod?set=source[/21/32/21321c2f8521316f5775d75c54f2edb7420be33a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
      //   name: '코튼 스웨트 셔츠',
      //   price: '39,900',
      //   is_new: 0,
      // },
    ];

    const { colorHeart, isHeart } = this.props;
    return (
      <article className="styleRecommend">
        <div>
          <p>스타일</p>
        </div>
        <ul className="styleBox">
          {styleContent.map(content => (
            <li className="styleContent" key={content.id}>
              <div className="box">
                <img alt="styleImg" src={content.url} />
                <i
                  // className={!isHeart ? 'fas fa-heart' : 'fas fa-heart red '}
                  onClick={colorHeart}
                  className={`fas fa-heart ${isHeart ? 'red' : ''}`}
                />
              </div>
              <span className="blank">blank staples</span>
              <Link to="#" className="link">
                {content.name}
              </Link>
              <span>₩ {content.price}</span>
            </li>
          ))}
        </ul>
      </article>
    );
  }
}

export default StyleRecommend;
