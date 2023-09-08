import React from "react";
import { Link } from "react-router-dom";


const HomeAuthor = ({ author}) => {
 
  return (
    <article className="authorlist">
     

      <Link to={`/author/${author.id}`} className="authorcard">
       
       <p className="authorname">Authorname: {author.authorname}</p>
       <p className="dateofbirth">D.O.B: {author.dateofbirth}</p>
       <p className="shortbio">Short-Bio: {author.shortbio}</p>
       
     </Link>
     
    </article>
  );
};

export default HomeAuthor;
