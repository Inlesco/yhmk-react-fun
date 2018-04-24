import * as constants from '../constants/constants'
import axios from 'axios';

export function fetchSubjects() {
    return (dispatch) => {
        axios.get('http://localhost:3000/subjects')
            .then((response) => {
                dispatch(fetchSubjectsSuccess(response.data));
            })
            .catch(err => {
                dispatch(fetchSubjectsError(err));
            });

        return {
            type: constants.FETCHING_SUBJECTS,
            isFetching: true,
            subjects: null
        };
    }
}

export function fetchSubjectsSuccess(SubjectsList) {
    return {
        type: constants.FETCH_SUBJECTS_SUCCESS,
        isFetching: false,
        subjects: SubjectsList
    };
}

export function fetchSubjectsError(error) {
    return {
        type: constants.FETCH_SUBJECTS_ERROR,
        isFetching: false,
        subjects: null,
        error: error
    };
}