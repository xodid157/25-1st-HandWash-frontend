import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Campaign extends Component {
  render() {
    const { campaignTitle, campaignContents, linkTitle, campaignImg } =
      this.props;
    return (
      <div className="campaignLayout">
        <div className="campaignContent">
          <img alt="campaignImg" src={campaignImg} />
          <div>
            <h3>{campaignTitle}</h3>
            <p>{campaignContents}</p>

            <Link to="/">{linkTitle}</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Campaign;
