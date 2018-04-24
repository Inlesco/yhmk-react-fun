import BooksComponent from '../BooksComponent';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/booksActions'

export class Books extends React.Component {
  fetchBooks = () => {
    this.props.actions.fetchBooks();
  }

  render() {
    return (
      <BooksComponent 
        books={this.props.books}
        onLoad={this.fetchBooks.bind(this)}/>
    );
  }
}

Books.propTypes = {
  actions: PropTypes.object.isRequired,
  books: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    books: state.booksReducer.books
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);
