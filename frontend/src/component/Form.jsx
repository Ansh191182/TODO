import React, { useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userData } from "../store/userSlice";

const Form = () => {
  // First Hook

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handSubmit = async () => {
    const name = nameRef.current.value.trim();
    const email = nameRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!name || !email || !password) {
      return toast.error("all fields are required");
    }

    const response = await axios.post("http://localhost:8000/signup", {
      name: name,
      email: email,
      password: password,
    });

    if (response) {
      dispatch(userData(response.data));
      navigate("/task");
      console.log(response.data);
      nameRef.current.value = "";
      nameRef.current.value = "";
      passwordRef.current.value = "";

      return toast.success(`${response.data.name} Welcome to TODO APP`);
    } else {
      return toast.error("internal server error");
    }
  };

  return (
    <>
      <div className="Form">
        <h1>IT Geeks Prepration</h1>
        <input type="text" ref={nameRef} placeholder="Enter your name" />
        <input
          type="email"
          emailRef={emailRef}
          placeholder="Enter your email"
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Enter your password"
        />

        <button onClick={handSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Form;
