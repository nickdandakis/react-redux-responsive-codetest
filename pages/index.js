import React, { Component } from 'react';

import withRedux from '../hocs/withRedux';

class IndexPage extends Component {
  render() {
    return (
      <h1>
        🌈 Ultimate Relationship Manager 9000 ✨
      </h1>
    );
  }
}

export default withRedux(IndexPage);
