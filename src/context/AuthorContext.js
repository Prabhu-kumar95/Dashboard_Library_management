import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthorContext = createContext({});

export const DataProviders = ({ children }) => {
  let [searches, setSearches] = useState("");
  let [searchResultses, setSearchResultses] = useState("");
 

  // using through local storage

  let [authors, setAuthors] = useState(
    JSON.parse(localStorage.getItem("authors")) || [
      {
        id: 1,
        authorname: "Harry",
        dateofbirth: "08-09-1884",
        shortbio:"A great ancient novel writer",
      },
      {
        id: 2,
        authorname: "Harry",
        dateofbirth: "08-09-1884",
        shortbio:"A great ancient novel writer",
      },
      {
        id: 3,
        authorname: "Harry",
        dateofbirth: "08-09-1884",
        shortbio:"A great ancient novel writer",
      },
      {
        id: 4,
        authorname: "Harry",
        dateofbirth: "08-09-1884",
        shortbio:"A great ancient novel writer",
      },
      {
        id: 5,
        authorname: "Harry",
        dateofbirth: "08-09-1884",
        shortbio:"A great ancient novel writer",
      }
      
    ]
  );
  useEffect(() => {
    let filteredAuthors = authors.filter(
      (authors) =>
        authors.authorname.toLowerCase().includes(searches.toLowerCase()) ||
        authors.shortbio.toLowerCase().includes(searches.toLowerCase())
    );
    localStorage.setItem("authors", JSON.stringify(filteredAuthors));
    setSearchResultses(filteredAuthors.reverse());
  }, [authors, searches, setAuthors]);
  
  let navigate = useNavigate();
  /*---------------------------- */
  /*-------Adding new books----- */
  /*---------------------------- */
  let handleSubmit = (values) => {
    let id = authors.length ? authors[authors.length - 1].id + 1 : 1;
    let newAuthor = {
      id,
      
      authorname: values.authorname,
      dateofbirth:values.dateofbirth,
      shortbio: values.shortbio,
     
    };
    let allAuthors = [...authors, newAuthor];
    setAuthors(allAuthors);
    navigate("/authorlist");
  };
  /*---------------------------- */
  /*-------canceling operation----- */
  /*---------------------------- */
  let handleCancel = () => {
    navigate("/authorlist");
  };
  /*---------------------------- */
  /*-------Deleting books----- */
  /*---------------------------- */
  let handleDelete = (id) => {
    if (window.confirm("Are you sure") === true) {
      let filteredAuthors = authors.filter((author) => author.id !== id);
      
      
      setAuthors(filteredAuthors);
      navigate("/authorlist");
    }
  };
  /*---------------------------- */
  /*-------Editing books------- */
  /*---------------------------- */
  let handleEdit = (values) => {
    let editedAuthor = {
      id: values.id,
      
      authorname: values.authorname,
      dateofbirth:values.dateofbirth,
      shortbio: values.shortbio,
     
    };
    let updatedAuthor = authors.map((author) =>
      author.id === values.id ? { ...editedAuthor } : author
    );
    setAuthors(updatedAuthor);
    navigate("/authorlist");
  };
  
  return (
    <AuthorContext.Provider
      value={{
        searches,
        setSearches,
        searchResultses,
        handleSubmit,
        authors,
        handleDelete,
        handleEdit,
        handleCancel,
        
       
      
        
      }}
    >
      {children}
    </AuthorContext.Provider>
  );
};

export default AuthorContext;
