import { combineReducers, createStore } from 'redux';
import booksReducer from './books';
import subjectsReducer from './subjects';

import { StoreState } from '../types/index';

import { BooksAction } from '../actions/books';
import { SubjectsAction } from '../actions/subjects';

const initialState: StoreState = {
    isFetching: false,
    error: {}, 
    data: [], 
    type: ''
};

// const booksStore = createStore<StoreState, BooksAction, null, null>(booksReducer, {
//     isFetching: false,
//     error: {}, 
//     data: [], 
//     type: ''
// });
  
// const subjectsStore = createStore<StoreState, SubjectsAction, null, null>(subjectsReducer, {
//     isFetching: false,
//     error: {}, 
//     data: [], 
//     type: ''
// });

const reducers = combineReducers({
    booksReducer: booksReducer,
    subjectsReducer: subjectsReducer
});

export default reducers;