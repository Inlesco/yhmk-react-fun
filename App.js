import React from 'react';
import './App.css';

class App extends React.Component {
  
constructor(props) {
    super(props);
    this.state = { books: [] };
    }

bookItems(book){
      return (
  
       
        
      <li>
      <p>Book ID: {book.id}</p>

      <p>Title: {book.title}</p>
      
      {book.authors.map (value => (
          <div>
          <p>Author's name: {value.name} </p>
          <p>Birth year: {value.birth_year} </p>
          <p>Death year: {value.death_year} </p> </div>
           ))}

      {book.subjects.map (value => (
          <div>
          <p>Subjects: {value} </p>  </div>
           ))}

      {book.languages.map (value => (
          <div>
          <p>Language: {value} </p>  </div>
           ))}

      <p>Media type: {book.media_type} </p>
           
      {book.bookshelves.map (value => (
          <div>
          <p> Bookshelves: {value} </p></div>
          ))}

    <p>Downloaded {book.download_count} times</p>

      <p>Format:</p>
      {Object.values(book.formats).map(value => (
        
          <p> <a href={value}>{value}</a></p>
          
          ))}
    
      
      </li>
     
      )
      };
 

 
render() {
    return (
      <div className="App">
      <h1>Books</h1>
      <ul>{this.state.books.map(book => this.bookItems(book))}</ul>
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
