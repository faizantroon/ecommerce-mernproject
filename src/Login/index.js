import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [isLoggedIn]);

  async function submitForm(event) {
    event.preventDefault();
    if (email === "" || password === "") {
      setError("All fields are required");
    } else {
      try {
        const resp = await axios.post("http://localhost:3001/users/login", {
          username: email,
          password: password,
        });
        if (resp?.status === 200) {
          dispatch(login(resp?.data?.data));
          navigate("/dashboard");
          setError("");
        }
      } catch (error) {
        console.log(error);
        setError(error.response.data.message);
      }
    }
    console.log("email", email);
    console.log("password", password);
  }
  return (
    <section className="loginform d-flex align-items-center">
      <div className="row justify-content-center flex-grow-1">
        <div className="col-md-4">
          <form className="p-4 rounded-4">
            <h2 className="text-center">Login</h2>
            {error !== "" && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                value={password}
              />
            </div>

            <button
              onClick={(event) => submitForm(event)}
              type="submit"
              className="btn btn-primary d-block w-100 mb-1"
            >
              Submit
            </button>
            <Link to="/signup">Dont have account. Signup</Link>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
