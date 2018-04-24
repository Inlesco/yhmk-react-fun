import React from 'react';
import * as actions from '../../actions/subjectsActions';
import * as bookActions from '../../actions/booksActions';
import {connect} from 'react-redux';
import SubjectsComponent from '../SubjectsComponent';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';

export class Subjects extends React.Component {
  fetchSubjects = () => {
    this.props.actions.fetchSubjects();
  }

  filterBySubject = (subject) => {
    this.props.bookActions.fetchBooks(subject);
  }

  render() {
    return (
      <SubjectsComponent 
        subjects={this.props.subjects}
        onLoad={this.fetchSubjects.bind(this)}
        filter={this.filterBySubject.bind(this)}/>
    );
  }
}

Subjects.propTypes = {
  actions: PropTypes.object.isRequired,
  bookActions: PropTypes.object.isRequired,
  subjects: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    subjects: state.subjectsReducer.subjects
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    bookActions: bindActionCreators(bookActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Subjects);
