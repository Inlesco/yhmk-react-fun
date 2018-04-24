import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import booksReducer from './booksReducer'
import subjectsReducer from './subjectsReducer'


const rootReducer = combineReducers({
  booksReducer,
  subjectsReducer,
  routing: routerReducer
});

export default rootReducer;
