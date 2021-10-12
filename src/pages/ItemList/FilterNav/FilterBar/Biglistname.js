import React from 'react';

class Biglistname extends React.Component {
  render() {
    const { children } = this.props;
    return <span className="bigListName">{children}</span>;
  }
}

export default Biglistname;
