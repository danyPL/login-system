import React, { Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../actions/loginActions";
import { Row, Col, Container } from "react-bootstrap";
const RegisterPage = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    name:"",
    surname:"",
    email:"",
    userNameError: false,
    passwordError: false,
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = state;
    if (!username) {
      setState({ ...state, userNameError: true });
    }
    if (!password) {
      setState({ ...state, passwordError: true });
    }
    if (username && password) {
      await dispatch(loginActions.register(state.email,state.username,state.password));
    }
  };
  const loginPending = useSelector((state) => state.loginPending);
  const isLogged = useSelector((state) => state.isLogged);
  const { password, passwordError, userNameError, surname, email, username,name } = state;
  return (
    <div className={`container-fluid bg-light`}>
        <div className="row">
          <div className="col"></div>
    <div>

      {!isLogged && (
        <div className="container">
          <div className="row">
          {loginPending && "Logowanie w trakcie...."}
          {userNameError && (
            <div className="small alert alert-danger vh-10" role="alert">
              Nazwa użytkownika jest wymagana
            </div>
          )}
          {passwordError && (
            <div className="small alert alert-danger px-2 w-auto" role="alert">Hasło jest wymagane</div>
          )}
          </div>
        </div>
      )}
      <div className={`d-flex w-100 vh-70 m-5 justify-content-center align-items-center bg-light`}>
        <div className="w-50 border bg-white shadow p-5 pt-3 pb-5 rounded">
          <h1>Stwórz Konto</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="name">Imie:</label>
              <input
                type="text"
                name="name"
                value={name}
                className="form-control"
                placeholder="Wpisz imie"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="surname">Email:</label>
              <input
                type="text"
                name="email"
                value={email}
                className="form-control"
                placeholder="Wpisz nazwisko"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="username">Pseudonim:</label>
              <input
                type="username"
                name="username"
                value={username}
                className="form-control"
                placeholder="Wpisz pseudonim"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password">Hasło:</label>
              <input
                type="password"
                name="password"
                value={password}
                className="form-control"
                placeholder="Wpisz haslo"
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
      </div>
    </div>
    
    </div>
        </div>
  );
};
export default RegisterPage;
