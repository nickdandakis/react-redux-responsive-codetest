import React, { Component } from 'react';

import withRedux from '../hocs/withRedux';

class IndexPage extends Component {
  render() {
    return (
      <h1>
        Real friends, how many of us?
      </h1>
    );
  }
}

export default withRedux(IndexPage);
