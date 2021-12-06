import React from "react";
import "./test.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const diffToast = () => {
    toast.success("login successfully", {
        position:"top-center"
    });
  };

  return (
    <>
      <div className="main-div">
        <h2>Welcome to Sign In page</h2>
        <button className="btn btn-primary" onClick={diffToast}>
          Login
        </button>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Login;
