import { useState, useEffect } from 'react';
import {Redirect} from "react-router-dom";
import Service from "../service/service.js";
import { useHistory } from "react-router-dom";

const useForm = (callback, Validate) => {
const initialState = {
    email: "",
    password:""
  };
     const history = useHistory();

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [info, setInfo] = useState(values);
  const [comments,setComments]=useState(false);



  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
       console.log("1s");   
    postvalidation();
    callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(Validate(values));
    setIsSubmitting(true);
    
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

const postvalidation = () => {
  var data = {
EmailAddress:values.email,
password:values.password  
    };
    console.log("data ", data);
    Service.login_validation(data)
      .then(response => {
        console.log("1");    
  console.log("2");

  history.push('/dashboard');
  history.go(0);

     
      })
 .catch(e => {
setComments(true);
  history.push('/');
  
  console.log(e);
      });
}
  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    comments
  }
};

export default useForm;