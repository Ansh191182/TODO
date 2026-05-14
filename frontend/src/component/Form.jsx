import React, { useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userData } from "../store/userSlice";

const Form = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handSubmit = async () => {
    try {
      const name = nameRef.current.value.trim();
      const email = emailRef.current.value.trim();
      const password = passwordRef.current.value.trim();

      if (!name || !email || !password) {
        return toast.error("All fields are required");
      }

      const response = await axios.post("http://localhost:8000/signup", {
        name,
        email,
        password,
      });

      if (response.data) {
        dispatch(userData(response.data));

        console.log(response.data);

        // clear inputs
        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";

        toast.success(`${response.data.name} Welcome to TODO APP`);

        navigate("/task");
      }
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Internal Server Error");
    }
  };

  return (
    <div className="Form">
      <h1>Register</h1>

      <input type="text" ref={nameRef} placeholder="Enter your name" />

      <input type="email" ref={emailRef} placeholder="Enter your email" />

      <input
        type="password"
        ref={passwordRef}
        placeholder="Enter your password"
      />

      <button onClick={handSubmit}>Submit</button>
    </div>
  );
};

export default Form;

 //password
todo //name