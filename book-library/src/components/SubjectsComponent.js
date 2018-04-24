import * as React from 'react';
import '../styles/subjects.scss';

export default class SubjectsComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('subjects', props);
  }

  componentDidMount() {
    this.props.onLoad();
  }

  componentDidUpdate() {
    console.log(this.props);
  }
  
  render() {  
    if(!this.props.subjects) {
      return (
        <div>
          No subjects yet!
        </div>
      );
    } else {
      return(
        <div className="filter"> 
          {
            this.props.subjects.map((subject) => {
              return (
                <button className="filter-button"onClick={() => { this.props.filter(subject) }}>{subject}</button>
              )
            })
          }
        </div>
      )
    }
  } 
}