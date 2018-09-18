import React from 'react';
import './App.css';
import Book from './components/Book';

class App extends React.Component {
  
constructor(props) {
    super(props);
    this.state = { books: [] };
    }

render() {
    return (
      <div className="App">
        <div className="header">
        <h1>Books I have read</h1>
        </div>
        <div className="booklist">
            <ul>{this.state.books.map((book, index) => <Book data={book} key={index}/>)}</ul>
        </div>
      <hr/>
      </div>
      )
    }


componentDidMount() {
  fetch('http://localhost:3010/books')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
     } 
     
     )
     .then(response => this.setState({books: response}))
     .catch(error => console.log(error));

    }
  };


  export default App;