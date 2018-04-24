import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Books from './containers/Books';
import Subjects from './containers/Subjects';

export default class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
          <div>
            <Subjects/>
            <Books/>
          </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
  // history: PropTypes.object.isRequired 
};
