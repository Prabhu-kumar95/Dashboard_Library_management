import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../context/DataContext";
import "./EditBook.css";
import { Form, Formik } from "formik";
import InputField from "../NewBooks/InputField";
import * as Yup from "yup";

const EditBook = () => {
  let { handleEdit, handleCancel, books } = useContext(DataContext);
  let { id } = useParams();
  let book = books.find((book) => book.id.toString() === id);
  const validate = Yup.object({
    title: Yup.string()
      .min(5, "Must contain 5 character or more")
      .required("Required!"),
    author: Yup.string()
      .min(5, "Must contain 5 character or more")
      .required("Required!"),
      isbn: Yup.string().required("must contains 13 numers"),  
      publicationdate: Yup.string().required("required!"),
  });
  return (
    <main className="NewBook">
      <Formik
        initialValues={{
          id: book.id,
          title: book.title,
          author: book.author,
          isbn:book.isbn,
          publicationdate: book.publicationdate,
          
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          handleEdit(values);
        }}
      >
        {(formik) => (
          <>
            <h2>Edit Book Details</h2>
            <Form className="newBookForm">
              <div className="form-group">
                <div className="row">
                  <InputField label="Title" name="title" type="text" />
                </div>
                <div className="row">
                  <InputField label="Author" name="author" type="text" />
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                <InputField label="ISBN" name="isbn" type="number" />
                </div>
                <div className="row">
                <InputField label="Publication" name="publicationdate" type="date" />
                </div>
              </div>
             
              <div className="btn-group">
                <button type="button" onClick={handleCancel} className="cancel">
                  Cancel
                </button>
                <button type="submit" className="add">
                  Update
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </main>
  );
};

export default EditBook;
