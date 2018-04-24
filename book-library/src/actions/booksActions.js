import * as constants from '../constants/constants'
import axios from 'axios';

export function fetchBooks(subject) {
    return (dispatch) => {
        axios.get(`http://localhost:3000/books${(subject) ? '?subjects=' + subject : ''}`)
            .then((response) => {
                dispatch(fetchBooksSuccess(response.data));
            })
            .catch(err => {
                dispatch(fetchBooksError(err));
            });

        return {
            type: constants.FETCHING_BOOKS,
            isFetching: true,
            books: null
        };
    }
}

export function fetchBooksSuccess(booksList) {
    return {
        type: constants.FETCH_BOOKS_SUCCESS,
        isFetching: false,
        books: booksList
    };
}

export function fetchBooksError(error) {
    return {
        type: constants.FETCH_BOOKS_ERROR,
        isFetching: false,
        books: null,
        error: error
    };
}