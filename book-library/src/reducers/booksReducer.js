import * as constants from '../constants/constants'
import initialState from './initialState';
export default function booksReducer(state = initialState, action) {
    switch (action.type) {
        case constants.FETCHING_BOOKS:
            return {
                ...state,
                isFetching: true
            };
        case constants.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                books: action.books
            };
        case constants.FETCH_BOOKS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        default:
            return state;
    }
}