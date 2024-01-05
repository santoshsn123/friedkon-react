import React, { useEffect, useState } from "react";
import "./Login.css";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {

  useEffect(()=>{
    if(localStorage.getItem('loggedInUser')){
      window.location.href = '/admin';
    }
  },[])

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data: FieldValues) => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL;

    axios
      .post(apiUrl + "admin/login", data)
      .then((response) => {
        setErrorMessage('');
        setSuccessMessage("Login is Successfull !!");
        localStorage.setItem('loggedInUser', JSON.stringify(response?.data));
        reset();
        window.open("/admin","_self");
      })
      .catch((error) => {
        const {message} = error?.response?.data;
        setErrorMessage(message);
      });
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h3>Login Here</h3>
        {successMessage && <p className="success">{successMessage}</p>}
        {errorMessage && <span className="error-msg">{errorMessage}</span>}
        <label>Email</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
          type="text"
          placeholder="Email"
          id="email"
          className="form-control"
        />
        {errors.email?.type === "required" && (
          <div className="error-msg " role="alert">
            Please Enter Email Address
          </div>
        )}
        {errors.email?.type === "pattern" && (
          <div className="error-msg" role="alert">
            Please Enter Valid Email Address
          </div>
        )}

        <label>Password</label>
        <input
          {...register("password", {
            required: true,
            minLength: 5,
          })}
          type="password"
          placeholder="Password"
          id="password"
          className="form-control"
        />
        {errors.password?.type === "required" && (
          <div className="error-msg" role="alert">
            Password is required!!
          </div>
        )}
        {errors.password?.type === "minLength" && (
          <div className="error-msg " role="alert">
            Password must be 8 charecters long!!
          </div>
        )}
        <button type="submit" className="btn btn-primary login-button">Log In</button>
      </form>
    </>
  );
};

export default Login;
