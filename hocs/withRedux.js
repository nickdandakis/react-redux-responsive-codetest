import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import initRedux from '../utils/initRedux';
import { getComponentDisplayName } from '../utils/misc';

export default ComposedComponent => {
  return class WithRedux extends React.Component {
    static displayName = `WithRedux(${getComponentDisplayName(ComposedComponent)})`

    static async getInitialProps (ctx) {
      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {};
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      return {
        ...composedInitialProps
      }
    }

    constructor (props) {
      super(props);
      this.redux = initRedux();
    }

    render () {
      return (
        <Provider store={this.redux}>
          <ComposedComponent {...this.props} />
        </Provider>
      )
    }
  }
}
