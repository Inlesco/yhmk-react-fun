import Books from '../components/Books';
import * as actions from '../actions/books';
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

export function mapDispatchToProps(dispatch: Dispatch<actions.BooksAction>) {
  return {
    onFetch: () => {
      dispatch(actions.fetchBooks(dispatch));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);
