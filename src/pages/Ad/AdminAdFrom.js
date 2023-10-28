import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../actions/loginActions";
import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import annoucesActions from "../../actions/annoucesActions";
const AdminAdForm = ({theme}) => {
  const navigation = useNavigate()
  const [state, setState] = useState({
    title: "",
    opis: "",
    discord:false
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, opis, discord} = state;

  
    console.log('test')
      await dispatch(annoucesActions.Annouce_Add(title, opis, discord || false));
      alert("ogloszenie dodane!")
      navigation('/admin/ogloszenia')
      
    
  };
  const loginPending = useSelector((state) => state.loginPending);
  const isLogged = useSelector((state) => state.isLogged);
  const { title, opis, discord} = state;
  return (
    <div className={`container-fluid bg-light`}>
        <div className="row">
          <div className="col"></div>
    <div>

     
      <div className={`d-flex w-100 vh-70 m-5 justify-content-center align-items-center bg-light`}>
        <div className="w-50 border bg-white shadow p-5 pt-3 pb-5 rounded">
          <h1>Stwórz Ogłoszenie</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="title">Tytuł:</label>
              <input
                type="text"
                name="title"
                value={title}
                className="form-control"
                placeholder="Wpisz tytuł"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password">Opis ogłoszenia:</label>
              
              <textarea
              
              style={{minHeight:"2em",minWidth:"1em"}}
              type=""
              name="opis"
              value={opis}
              className="form-control"
              placeholder="Wpisz opis"
              onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="discord">Discord:</label>
              <input
                type="checkbox"
                name="discord"
                value={discord}

                onChange={()=>setState({...state,discord: !discord})}
              />
              
            </div>
            <button className="btn btn-primary mt-3">Stwórz</button>
          </form>
        </div>
      </div>
    </div>
    
    </div>
        </div>
  );
};
export default AdminAdForm;
