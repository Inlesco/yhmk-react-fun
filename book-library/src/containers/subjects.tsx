import Subjects from '../components/Subjects';
import * as actions from '../actions/subjects';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ isFetching, data, error, type }: StoreState) {
  return {
    isFetching,
    data,
    error,
    type
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.SubjectsAction>) {
  return {
    onFetch: () => {
      dispatch(actions.fetchSubjects(dispatch));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Subjects);
