import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Books from './containers/books';
import Subjects from './containers/subjects';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import  reducers from './reducers/index';
import { StoreState } from './types/index';

import './index.css';

const reducersStore = createStore(reducers, {
  booksReducer: {
    isFetching: false,
    error: {}, 
    data: [], 
    type: ''
  },
  subjectsReducer: {
    isFetching: false,
    error: {}, 
    data: [], 
    type: ''
  }
});

ReactDOM.render(
  <div>
    <Provider store={reducersStore}>
      <Subjects />
      <Books />
    </Provider>
  </div>,
  document.getElementById('root') as HTMLElement
);
