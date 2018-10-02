import React, { Component } from 'react';
import { connect } from 'react-redux';

const style = {
  color: "#48557D",
}

const spanBold = {
  fontWeight: 'bold',
}

const spanColor = {
  color: "#515562",
}


class BookDetail extends Component {
  render() {
    // var style = {
    //   fontWeight: 'bold',
    // }

    if(!this.props.book) {
      return <div >Select a book for more information</div>;
     }

    return (
      <div>
        <h4 style={{color: "#48557D", letterSpacing: "2", textDecorationLine: "underline"}}>Detailed information:</h4>
        <div><span style={spanBold}>Title:</span> <span style={spanColor}>{this.props.book.title}</span></div>
        <div><span style={spanBold}>ID:</span> <span style={spanColor}> {this.props.book.id}</span></div>
        <div><span style={spanBold}>Bookshelves:</span><span style={spanColor}> {this.props.book.bookshelves}</span></div>
        <div><span style={spanBold}>Media type:</span> <span style={spanColor}>{this.props.book.media_type}</span></div>
        <div><span style={spanBold}>Subjects:</span><span style={spanColor}> {this.props.book.subjects}</span></div>
        <div><span style={spanBold}>Languages:</span> <span style={spanColor}>{this.props.book.languages}</span></div>
        <div><span style={spanBold}>Download_count:</span><span style={spanColor}> {this.props.book.download_count}</span></div>
       
            
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);