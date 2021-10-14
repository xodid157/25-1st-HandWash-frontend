import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Campaign extends Component {
  render() {
    const { campaignTitle, campaignContents, linkTitle } = this.props;
    return (
      <div className="campaignLayout">
        <div className="campaignContent">
          <img src="/images/main_img.jpeg" alt="" />
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
