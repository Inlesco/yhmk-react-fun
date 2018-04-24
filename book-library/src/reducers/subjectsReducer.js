import * as constants from '../constants/constants'
import initialState from './initialState';

export default function subjectsReducer(state = initialState, action) {
    switch (action.type) {
        case constants.FETCHING_SUBJECTS:
            return {
                ...state,
                isFetching: true
            };
        case constants.FETCH_SUBJECTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                subjects: action.subjects
            };
        case constants.FETCH_SUBJECTS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        default:
            return state;
    }
}