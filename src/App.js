import Home from "./components/Home/Home";
import AuthorList from "./components/Authorlist/AuthorList";

import Footer from "./components/Footer";
import Missing from "./components/Missing";
import NewBook from "./components/NewBooks/NewBook";
import NewAuthor from "./components/NewAuthors/NewAuthor"
import Book from "./components/EditBook/Book";
import Author from "./components/EditAuthor/Author"
import EditBook from "./components/EditBook/EditBook";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { DataProvider } from "./context/DataContext";
import {DataProviders  } from "./context/AuthorContext";
import EditAuthor from "./components/EditAuthor/EditAuthor";

function App() {
  return (
    <div className="App">
      <DataProviders>
      <DataProvider>
        <Header title="Library" hub=" Manager " />
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="book">
            <Route index element={<NewBook />} />
            <Route path=":id" element={<Book />} />
          </Route>
          <Route path="/authorlist" element={<AuthorList/>} />
          <Route path="author">
            <Route index element={<NewAuthor />} />
            <Route path=":id" element={<Author />} />
          </Route>
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/authorlist/author/edit/:id" element={<EditAuthor />} />
          
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
      </DataProviders>
    </div>
  );
}

export default App;
