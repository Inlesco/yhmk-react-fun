import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

const AppComponent = {
  
  backgroundColor:'lightGrey', flex: 0.3,
  padding: "20px",
  minHeight: "400px",
  width: "1000px",
  margin: "0 auto",
  marginTop: "50px",
}

const Header = {
  marginLeft: "60px",
  color: "#515562",
 
}

const bookList = {
 color: "#48557D",
 backgroundColor: "#f9f3f3d9",
}

const bookDetail = {
   color: "#48557D",
}


export default class App extends Component {
  render() {
    return (
      <div style={AppComponent}>
        <h2 style={Header}>Books I have read</h2>
        <div style={bookList} className="booklist">
          <ul><BookList /></ul>
        </div>
        <div style={bookDetail} className="bookdetail">
          <ul><BookDetail /></ul>
        </div>
   
        

    </div>
    );
  }
}

