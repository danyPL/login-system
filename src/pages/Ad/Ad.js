import React, { useEffect, useState } from "react";
import annoucesActions from "../../actions/annoucesActions";
import { useDispatch, useSelector } from "react-redux";
import "./ad.css";
import ReactPaginate from "react-paginate";
const Ad = () => {
  const dispatch = useDispatch();
  const [annouces, setAnnouces] = useState(
    JSON.parse(localStorage.getItem("annouces")).data
  );
const test = useSelector(state=>state.annouceReducer)
  useEffect(() => {
    dispatch(annoucesActions.Annouce_Show());
    console.log(JSON.parse(localStorage.getItem("annouces")));
  }, []);

  return (
    <div
      className="container shadow bg-body rounded mycontainer "
      style={{ border: "0.5px solid black" }}
    >
      <header
        className=" row justify-content-between  rounded "
        style={{ backgroundColor: "#2e8b57" }}
      >
        <img
          class="col-2 bg-warning opacity-50"
          src="https://clipground.com/images/img-png-1.png"
          alt=""
        />
        <h1 className="d-flex justify-content-center text-light col-2">
          Ogloszenia
        </h1>
        <img
          class="col-2 bg-warning opacity-50"
          src="https://clipground.com/images/img-png-1.png"
          alt=""
        />
      </header>

      <main
        className="row d-flex justify-content-center p-4 "
        style={{ marginTop: "-5.5%", backgroundColor: "#2e8b57" }}
      >
        {annouces.map((e) => (
          <div
            className="col-4 m-4 shadow p-3 mb-5 rounded"
            key={e.id}
            style={{ width: "60%", height: "70%", backgroundColor: "#8fbc8f" }}
          >
            <h1>{e.title}</h1>
            <blockquote>
              <p className="lead">
                <b>{e.opis}</b>
              </p>
            </blockquote>
          </div>
        ))}
      </main>
    </div>
  );
};
export default Ad;
