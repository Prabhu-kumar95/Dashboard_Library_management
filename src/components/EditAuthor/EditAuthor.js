import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AuthorContext from "../../context/AuthorContext";
import "./EditAuthor.css";
import { Form, Formik } from "formik";
import InputField from "../NewAuthors/InputField";
import * as Yup from "yup";

const EditAuthor = () => {
  let { handleEdit, handleCancel, authors } = useContext(AuthorContext);
  let { id } = useParams();
  let author = authors.find((author) => author.id.toString() === id);
  const validate = Yup.object({
    authorname: Yup.string()
      .min(5, "Must contain 5 character or more")
      .required("Required!"),
    dateofbirth: Yup.string()
      
      .required("Required!"),
    shortbio: Yup.string().min(5,"Must contains 10 characters").max(30,"Must contains 30 characters").required("Must contains min 10 t0 max 30 characters"),  
      
  });
  return (
    <main className="NewAuthor">
      <Formik
        initialValues={{
          id: author.id,
          authorname: author.authorname,
          dateofbirth: author.dateofbirth,
          shortbio:author.shortbio,
          
          
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          handleEdit(values);
        }}
      >
        {(formik) => (
          <>
            <h2>Edit Author Details</h2>
            <Form className="newBookForm">
              <div className="form-group">
                <div className="row">
                  <InputField label="Authorname" name="authorname" type="text" />
                </div>
                <div className="row">
                  <InputField label="Author D.O.B" name="dateofbirth" type="date" />
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                <InputField label="Author Short-Bio" name="shortbio" type="text" />
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

export default EditAuthor;
