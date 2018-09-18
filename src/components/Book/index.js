import React from 'react';
import './Book.css';


function Book(props) {
 
    return (
      <div className="BooksContainer">
        <li>
        
        <p>Book ID:<span className="italic"> {props.data.id}</span></p>
       
        <p>Title:<span className="bold"> {props.data.title}</span> </p>
        
        
        {props.data.authors.map (value => (
            <div>
            <p>Author's name: {value.name} </p>
            <p>Birth year: {value.birth_year} </p>
            <p>Death year: {value.death_year} </p> 
            </div>
             ))}
  
        {props.data.subjects.map (value => (
            <div>
            <p>Subjects: {value} </p>  </div>
             ))}
  
        {props.data.languages.map (value => (
            <div>
            <p>Language: {value} </p>  </div>
             ))}
  
        <p>Media type: {props.data.media_type} </p>
             
        {props.data.bookshelves.map (value => (
            <div>
            <p> Bookshelves: {value} </p></div>
            ))}
  
      <p>Downloaded {props.data.download_count} times</p>
  
        <p>Format:</p>
        <span className="italic">{Object.values(props.data.formats).map(value => (
          
            <p> <a href={value}>{value}</a></p>
            
            ))}</span>
      
        </li>
        </div>
       
        )
  }


export default Book;