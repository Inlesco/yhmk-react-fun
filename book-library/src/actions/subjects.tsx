import * as constants from '../constants';
import axios from 'axios';
import { Dispatch } from 'react-redux';

export interface FetchSubjects {
    type: constants.FETCHING_SUBJECTS;
    isFetching: boolean;
}

export interface FetchSubjectsSuccess {
    type: constants.FETCH_SUBJECTS_SUCCESS;
    isFetching: boolean;
    data: object[];
}

export interface FetchSubjectsError {
    type: constants.FETCH_SUBJECTS_ERROR;
    isFetching: boolean;
    error: object;
}

export type SubjectsAction =  FetchSubjects | FetchSubjectsSuccess | FetchSubjectsError;

export function fetchSubjects(dispatch: Dispatch<SubjectsAction>): FetchSubjects {
    // tslint:disable-next-line:no-console
    axios.get('http://localhost:3000/subjects')
        .then((response) => {
            // tslint:disable-next-line:no-console
            console.log(response);
            dispatch(fetchSubjectsSuccess(response.data));
        })
        .catch(err => {
            dispatch(fetchSubjectsError(err));
        });

    return {
        type: constants.FETCHING_SUBJECTS,
        isFetching: true
    };
}

export function fetchSubjectsSuccess(SubjectsList: object[]): FetchSubjectsSuccess {
    return {
        type: constants.FETCH_SUBJECTS_SUCCESS,
        isFetching: false,
        data: SubjectsList
    };
}

export function fetchSubjectsError(error: object): FetchSubjectsError {
    return {
        type: constants.FETCH_SUBJECTS_ERROR,
        isFetching: false,
        error: error
    };
}