import { SubjectsAction } from '../actions/subjects';
import { StoreState } from '../types/index';
import { FETCH_SUBJECTS_SUCCESS, FETCH_SUBJECTS_ERROR, FETCHING_SUBJECTS } from '../constants';

// const initialState = {
//     data: [],
//     isFetching: false,
//     error: {},
//     type: ''
// };
// export default initialState;

export default function subjectsReducer(state: StoreState, action: SubjectsAction): StoreState {
    switch (action.type) {
        case FETCHING_SUBJECTS:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SUBJECTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        case FETCH_SUBJECTS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        default:
            return state;
    }
}