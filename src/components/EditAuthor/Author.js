import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AuthorContext from "../../context/AuthorContext";
import "./EditAuthor.css";

const Author = () => {
  let { authors, handleDelete } = useContext(AuthorContext);
  let { id } = useParams();
  // let book = searchResults.find((book) => book.id.toString() === id.toString());
  let author = authors.filter((author) => author.id.toString() === id.toString())[0];
  return (
    <main className="AuthorPage">
      <article className="authorlist">
        {author && (
          <>
           
            <div className="right">
             
              <h3 className="authorname1">Authorname :   {author.authorname}</h3>
              <h2 className="dateofbirth1">Author D.O.B :  {author.dateofbirth}</h2>
              <h1 className="shortbio1">Author Short-Bio :  {author.shortbio}</h1>
             
              <div className="btn-group">
                <Link to="/authorlist">
                  <button className="backBtn">Back</button>
                </Link>
                <Link to={`/authorlist/author/edit/${author.id}`}>
                  <button className="editButton">Edit Author Details</button>
                </Link>
                <button
                  className="deleteButton"
                  onClick={() => handleDelete(author.id)}
                >
                  Delete Author
                </button>
              </div>
            </div>
          </>
        )}
        {!author && (
          <>
            <h2>Post not found</h2>
            <Link to="/authorlist">
              <p>Kindly Visit Our AuthorDetails and Explore</p>
            </Link>
          </>
        )}  
      </article>
    </main>
  );
};

export default Author;
