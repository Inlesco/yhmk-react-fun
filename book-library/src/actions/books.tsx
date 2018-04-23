import * as constants from '../constants';
import axios from 'axios';
import { Dispatch } from 'react-redux';

export interface FetchBooks {
    type: constants.FETCHING_BOOKS;
    isFetching: boolean;
}

export interface FetchBooksSuccess {
    type: constants.FETCH_BOOKS_SUCCESS;
    isFetching: boolean;
    data: object[];
}

export interface FetchBooksError {
    type: constants.FETCH_BOOKS_ERROR;
    isFetching: boolean;
    error: object;
}

export type BooksAction = FetchBooks | FetchBooksSuccess | FetchBooksError;

export function fetchBooks(dispatch: Dispatch<BooksAction>): FetchBooks {
    // tslint:disable-next-line:no-console
    axios.get('http://localhost:3000/books')
        .then((response) => {
            // tslint:disable-next-line:no-console
            console.log(response);
            // handle your response here, create an object/array/array of objects etc... 
            // and return it in dispatch(getToDosSuccess(data over here))
            dispatch(fetchBooksSuccess(response.data));
        })
        .catch(err => {
            dispatch(fetchBooksError(err));
        });

    return {
        type: constants.FETCHING_BOOKS,
        isFetching: true
    };
}

export function fetchBooksSuccess(booksList: object[]): FetchBooksSuccess {
    return {
        type: constants.FETCH_BOOKS_SUCCESS,
        isFetching: false,
        data: booksList
    };
}

export function fetchBooksError(error: object): FetchBooksError {
    return {
        type: constants.FETCH_BOOKS_ERROR,
        isFetching: false,
        error: error
    };
}