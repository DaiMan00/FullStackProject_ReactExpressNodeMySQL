import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {useNavigate} from "react-router-dom";
/*useHistory in "react-router-dom" module version 5 is replaced by useNaviagtor in version 6*/

function CreatePost() {
    
    let navigate = useNavigate();

    const initialValues = {
        title: "",
        postText: "",
        username: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required(),
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts", data).then((response) => {
            navigate("/");
          });
    };

    return(
        <div className="createPostPage">
            <Formik 
            initialValues={initialValues} 
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            >
                <Form className="formContainer">
                <label>Title: </label>
                <ErrorMessage name="title" element="span" />
                    <Field 
                    autocomplete="off"
                    id="inputCreatePost" 
                    name="title" 
                    placeholder="Ex. Title..."
                    />
                <ErrorMessage name="postText" element="span" />
                <label>Post: </label>
                    <Field 
                    autocomplete="off"
                    id="inputCreatePost" 
                    name="postText" 
                    placeholder="Ex. Post..."
                    />
                <ErrorMessage name="username" element="span" />
                <label>Username: </label>
                    <Field 
                    autocomplete="off"
                    id="inputCreatePost" 
                    name="username" 
                    placeholder="Ex. Paul..."
                    />
                <button type="submit">Create Post</button>
                </Form>
            </Formik>
        </div>
    );
}

export default CreatePost