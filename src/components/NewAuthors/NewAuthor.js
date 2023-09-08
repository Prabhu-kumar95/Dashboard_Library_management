import React, { useContext } from "react";
import AuthorContext from "../../context/AuthorContext";
import "./NewAuthor.css";
import { Form, Formik } from "formik";
import InputField from "../NewAuthors/InputField";
import * as Yup from "yup";

const NewAuthor= () => {
  let { handleSubmit, handleCancel } = useContext(AuthorContext);
  const validate = Yup.object({
    authorname: Yup.string()
      .min(5, "Must contain 5 character or more")
      .required("Required!"),
    dateofbirth: Yup.string().required("Required!"),
    shortbio: Yup.string().min(5,"Must contain 10 characters").max(30,"Must contain 30 character").required("Must contain min-10 to max-30 character"),  
    
   
  });
  return (
    <main className="NewBook">
      <Formik
        initialValues={{
          authorname: "",
          dateofbirth: "",
          shortbio:"",
          
          
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {(formik) => (
          <>
            <h2>New Author</h2>
            <Form className="newBookForm">
              <div className="form-group">
                <div className="row">
                  <InputField label="Authorname" name="authorname" type="text" />
                </div>
                <div className="row">
                  <InputField label="Date-of-birth" name="dateofbirth" type="date" />
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <InputField label="Short-Bio" name="shortbio" type="text" />
                </div>
               
              </div>
             
              <div className="btn-group">
                <button type="button" onClick={handleCancel} className="cancel">
                  Cancel
                </button>
                <button type="submit" className="add">
                  Add Authors
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </main>
  );
};

export default NewAuthor;
// image: Yup.string().url("Invalid URL").required("Required!"),
// description: Yup.string()
//   .min(15, "Must contain 15 character or more")
//   .required("Required!"),