import React, { useContext } from "react";

import AuthorContext from "../../context/AuthorContext";
import HomeAuthor from "./HomeAuthor";


const Feed = () => {
  
  let { searchResultses } = useContext(AuthorContext);
  return (
    <>
   
      
       
     {searchResultses.map((author) => (
      <HomeAuthor key={author.id} author={author} />
    ))}
     
    </>
    
    
    
  );
};

export default Feed;
