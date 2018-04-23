import { BooksAction } from '../actions/books';
import { StoreState } from '../types/index';
import { FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR, FETCHING_BOOKS } from '../constants';

// const initialState = {
//     data: [],
//     isFetching: false,
//     error: {},
//     type: ''
// };
// export default initialState;

export default function booksReducer(state: StoreState, action: BooksAction): StoreState {
    switch (action.type) {
        case FETCHING_BOOKS:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        case FETCH_BOOKS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        default:
            return state;
    }
}