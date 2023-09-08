import React, { useContext } from "react";
import Feed from "./Feed";

import AuthorContext from "../../context/AuthorContext";
import "../Authorlist/Author.css";

const AuthorList = () => {
  
  let { searchResultses } = useContext(AuthorContext);
  return (
   
    <main className="Author">
    

{searchResultses.length ? (
        <Feed />
      ) : (
        <p style={{ marginTop: "2rem" }}>No Authors to display.</p>
      )}
    </main>
    
   
  );
};

export default AuthorList;
