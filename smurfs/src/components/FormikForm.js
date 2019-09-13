import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function LoginForm({ errors, touched, values, status }) {
    const [users, setUsers] = useState([]);
    useEffect(()=> {
        if (status) {
            setUsers([...users, status]);
        }
    }, [status]);

    return (
      <div className = "loginForm">
        <h1>Add A Smurf!</h1>
        <Form>
            <Field type="text" name="name" placeholder="Name" />
            {touched.name && errors.name && (
            <p className="error">{errors.name}</p> 
             )}
            <Field type="age" name="age" placeholder ="Age" />
            {touched.age && errors.age && (
             <p className="error">{errors.age}</p> 
            )}
            <Field type="height" name="height" placeholder="Height" />
            {touched.height && errors.height && (
             <p className="error">{errors.height}</p> 
             )}

            <button>Submit!</button>
        </Form>
      </div>
    )
};
const FormikLoginForm = withFormik({
mapPropsToValues({ name, age, height }){
    return{
        name: name || "",
        age: age || "",
        height: height || "",
    };
},

  handleSubmit(values, {setStatus}) {
      axios
        .post("http://localhost:3333/smurfs", values)
        .then(response =>{
            setStatus(response.data)
            console.log(response)
        })
  }
})(LoginForm)

export default FormikLoginForm;