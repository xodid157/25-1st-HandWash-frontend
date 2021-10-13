import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Magazine extends Component {
  render() {
    const { heading, cardLink } = this.props;
    return (
      <div className="magazineCard">
        <Link to="/">
          <img src="/images/magazin_card_img.jpeg" alt="magazinImg" />
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
