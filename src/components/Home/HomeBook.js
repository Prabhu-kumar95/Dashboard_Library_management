import React from "react";
import { Link } from "react-router-dom";


const HomeBook = ({ book }) => {
 
  return (
    <article className="book">
      <Link to={`book/${book.id}`} className="card">
       
        <h2>Title - {book.title}</h2>
        <p className="author">Author - {book.author}</p>
        <p className="isbn">ISBN No - {book.isbn}</p>
        <p className="date">Published on :{book.publicationdate}</p>
      </Link>

     
     
    </article>
  );
};

export default HomeBook;
