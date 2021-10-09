import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Magazin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      magazinList: [],
    };
  }

  componentDidMount() {
    fetch('data/magazin.json')
      .then(magazin => magazin.json())
      .then(data =>
        this.setState({
          magazinList: data,
        })
      );
  }

  render() {
    const { headingList, magazinImg } = this.props;
    return (
      <div className="magazinCard">
        <Link to="/">
          <img src={magazinImg} alt="" />
        </Link>
        <div className="magazinCardContents">
          <p className="vignette">INSIDE H&#x0026;W</p>
          <p className="heading">{headingList}</p>

          <div className="cardLink">
            <p>Read The Story &#x2192;</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Magazin;
