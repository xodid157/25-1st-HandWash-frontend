import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Magazin extends Component {
  render() {
    const { heading, cardLink } = this.props;
    return (
      <div className="magazinCard">
        <Link to="/">
          <img src="/images/magazin_card_img.jpeg" alt="magazinImg" />
        </Link>
        <div className="magazinCardContents">
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

export default Magazin;
