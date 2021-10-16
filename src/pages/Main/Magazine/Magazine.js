import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Magazine.scss';

class Magazine extends Component {
  render() {
    const { heading, cardLink, magazineImg } = this.props;
    return (
      <div className="magazineCard">
        <Link to="/">
          <img src={magazineImg} alt="magazinImg" />
        </Link>
        <div className="magazineCardContents">
          <p className="vignette">INSIDE H&#x0026;W</p>
          <p className="heading">{heading}</p>

          <div className="cardLink">
            <p>{cardLink}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Magazine;
