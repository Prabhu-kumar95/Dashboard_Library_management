import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  let [search, setSearch] = useState("");
  let [searchResults, setSearchResults] = useState("");
 

  // using through local storage

  let [books, setBooks] = useState(
    JSON.parse(localStorage.getItem("books")) || [
      {
        id: 1,
        title: "Software Architecture: The Hard Parts",
        author: "Neal Ford",
        isbn:"1234567891234",
        publicationdate: "2023-06-15",
        body: "There are no easy decisions in software architecture. Instead, there are many hard parts--difficult problems or issues with no best practices--that force you to choose among various compromises. With this book, you'll learn how to think critically about the trade-offs involved with distributed architectures.",
        saved: false,
      },
      {
        id: 2,
        title: "Learning Domain-Driven Design",
        author: "Vlad Khononov",
        isbn:"1234567891234",
        publicationdate: "2023-06-15",
        body: "Building software is harder than ever. As a developer, you not only have to chase ever-changing technological trends but also need to understand the business domains behind the software. This practical book provides you with a set of core patterns, principles, and practices for analyzing business domains, understanding business strategy, and, most importantly, aligning software design with its business needs.",
        saved: false,
      },
      {
        id: 3,
        title: "Fundamentals of Data Engineering",
        author: "Joe Reis, Matt Housley",
        isbn:"1234567891234",
        publicationdate: "2023-06-15",
        body: "Data engineering has grown rapidly in the past decade, leaving many software engineers, data scientists, and analysts looking for a comprehensive view of this practice. With this practical book, you'll learn how to plan and build systems to serve the needs of your organization and customers by evaluating the best technologies available through the framework of the data engineering lifecycle.",
        saved: false,
      },
      {
        id: 4,
        title: "Building Microservices (2nd ed.)",
        author: "Sam Newman",
        isbn:"1234567891234",
        publicationdate: "2023-06-15",
        body: "As organizations shift from monolithic applications to smaller, self-contained microservices, distributed systems have become more fine-grained. But developing these new systems brings its own host of problems. This expanded second edition takes a holistic view of topics that you need to consider when building, managing, and scaling microservices architectures.",
        saved: false,
      },
      {
        id: 5,
        title: "Fluent Python (2nd ed.)",
        author: "Luciano Ramalho",
        isbn:"1234567891234",
        publicationdate: "2023-06-15",
        body: "Don't waste time bending Python to fit patterns you've learned in other languages. Python's simplicity lets you become productive quickly, but often this means you aren't using everything the language has to offer. With the updated edition of this hands-on guide, you'll learn how to write effective, modern Python 3 code by leveraging its best ideas.",
        saved: false,
      }
      
    ]
  );
  useEffect(() => {
    let filteredBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    );
    localStorage.setItem("books", JSON.stringify(filteredBooks));
    setSearchResults(filteredBooks.reverse());
  }, [books, search, setBooks]);
 
  let navigate = useNavigate();
  /*---------------------------- */
  /*-------Adding new books----- */
  /*---------------------------- */
  let handleSubmit = (values) => {
    let id = books.length ? books[books.length - 1].id + 1 : 1;
    let newBook = {
      id,
      title: values.title,
      author: values.author,
      isbn:values.isbn,
      publicationdate: values.publicationdate,
     
    };
    let allBooks = [...books, newBook];
    setBooks(allBooks);
    navigate("/");
  };
  /*---------------------------- */
  /*-------canceling operation----- */
  /*---------------------------- */
  let handleCancel = () => {
    navigate("/");
  };
  /*---------------------------- */
  /*-------Deleting books----- */
  /*---------------------------- */
  let handleDelete = (id) => {
    if (window.confirm("Are you sure") === true) {
      let filteredBooks = books.filter((book) => book.id !== id);
      
      setBooks(filteredBooks);
      navigate("/");
    }
  };
  /*---------------------------- */
  /*-------Editing books------- */
  /*---------------------------- */
  let handleEdit = (values) => {
    let editedBook = {
      id: values.id,
      title: values.title,
      author: values.author,
      isbn:values.isbn,
      publicationdate: values.publicationdate,
     
    };
    let updatedBook = books.map((book) =>
      book.id === values.id ? { ...editedBook } : book
    );
    setBooks(updatedBook);
    navigate("/");
  };
  /*---------------------------- */
  /*-------saving books ------- */
  /*---------------------------- */
 
  /*---------------------------- */
  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        handleSubmit,
        books,
        handleDelete,
        handleEdit,
        handleCancel,
       
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
