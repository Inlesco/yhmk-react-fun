import * as React from 'react';
import '../styles/books.scss';

export default class BooksComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('books', props);
  }

  componentDidMount() {
    this.props.onLoad();
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    if (!this.props.books ) {
      return (
        <div>
          Books are empty!
        </div>
      );
    } else {
      return (
        <div className="book-container">
          {
            this.props.books.map((book) => {
              return (
                <div className="book-container-card">
                  <div className="book-container-card-header">
                    <p className="book-container-card-header-author"> {book.authors[0].name} ({book.authors[0].birth_year} - {book.authors[0].death_year})</p>
                    <p className="book-container-card-header-title">{book.title} ({book.subjects.join(', ')})</p>
                  </div>
                  <div className="book-container-download">
                  <p className="book-container-download-title">Read from:</p> 
                  {
                    <ul className="book-container-download-list">
                    {
                      Object.values(book.formats).map((value) => {
                      return (
                        <li className="book-container-download-list-item">
                          <a className="book-container-download-list-item-link" href={value} >
                            {value}
                            <br/>
                          </a>
                        </li>
                      )})
                    }
                    </ul>
                  }
                  </div>
                </div>
              )
            })
          }
        </div>
      );
    }
  } 
}