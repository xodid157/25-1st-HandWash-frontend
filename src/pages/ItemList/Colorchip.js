import React from 'react';
import { Link } from 'react-router-dom';

class Colorchip extends React.Component {
  render() {
    const { color } = this.props;
    console.log(color);
    return color ? (
      <Link to="#">
        <div className={color}></div>
      </Link>
    ) : (
      <Link>
        <div></div>
      </Link>
    );
    //방법이모지 ㅡㅡ 배열이 0이면 props값으로 아예 안들어온다
  }
}

export default Colorchip;
