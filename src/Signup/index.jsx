import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [username, setUserName] = useState("");
  const [street, setStreet] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function submitForm(event) {
    event.preventDefault();
    console.log(username);
    if (username === "" || password === "") {
      setError("All fields are required");
    } else {
      try {
        const resp = await axios.post("http://localhost:3001/users", {
          name: name,
          age: age,
          username: username,
          password: password,
          address: {
            street: street,
            state: "Punjab",
            city: "Rawalpindi",
            country: "Pakistan",
          },
        });
        if (resp?.status === 200) {
          setSuccess("User Created Successfully");
          setError("");
        }
      } catch (error) {
        console.log(error);

        setError("Something went wrong!!!");
      }
    }
  }
  return (
    <section className="loginform d-flex align-items-center">
      <div className="row justify-content-center flex-grow-1">
        <div className="col-md-4">
          <form className="p-4 rounded-4">
            <h2 className="text-center">Signup</h2>
            {error !== "" && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            {success !== "" && (
              <div className="alert alert-success" role="alert">
                {success}
              </div>
            )}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                type="text"
                className="form-control"
                value={name}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">User Name</label>
              <input
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
                type="email"
                className="form-control"
                value={username}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                onChange={(event) => {
                  setAge(event.target.value);
                }}
                type="number"
                min={1}
                className="form-control"
                value={age}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                value={password}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Street</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  setStreet(event.target.value);
                }}
                value={street}
              />
            </div>

            <button
              onClick={(event) => submitForm(event)}
              type="submit"
              className="btn btn-primary d-block w-100 mb-1"
            >
              Signup
            </button>
            <Link to="/">Already have account. Login</Link>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
