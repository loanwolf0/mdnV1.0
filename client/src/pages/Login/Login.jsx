import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth";
import { useDispatch } from "react-redux";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submit = async () => {
    try {
      if (values.username === "" || values.password === "") {
        alert("All fields are required");
      } else {
        const response = await axios.post(
          "http://localhost:1000/api/v1/user/sign-in",
          values,
          { headers: { "Content-Type": "application/json" } } // Add Content-Type header
        );
        console.log(response.data, "data");
        // set the redux

        dispatch(authActions.logIn());
        dispatch(authActions.changeRole(response.data.role));
        // set to the localstorage
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);

        navigate("/");

        // navigate("/LogIn");
      }
    } catch (error) {
      console.log(
        error.response ? error.response.data : error.message,
        "error"
      );
    }
  };

  return (
    <div className="h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center">
      <div className="bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 ">
        <p className="text-zinc-200 text-xl">Log In</p>
        <div className="mt-4">
          <label
            htmlFor="userName"
            className="text-zinc-100
          "
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            className="w-full mt-2 text-zinc-200 bg-zinc-900 p-2 outline-none"
            placeholder="username"
            required
            autoComplete="false"
            value={values.username}
            onChange={change}
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="password"
            className="text-zinc-400
          "
          >
            Password
          </label>
          <input
            type="text"
            name="password"
            className="w-full mt-2 text-zinc-200 bg-zinc-900 p-2 outline-none"
            placeholder="Password"
            autoComplete="false"
            required
            value={values.password}
            onChange={change}
          />
        </div>

        <div className="mt-4">
          <button
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-700"
            onClick={submit}
          >
            LogIn
          </button>
        </div>
        <p className="flex mt-4 items-center justify-center text-zinc-200 font-semibold gap-3">
          Do not have an account?
          <Link to="/signUp" className="hover:text-blue-500">
            <u>SignUp</u>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
