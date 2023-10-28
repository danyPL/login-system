import React, { useState } from "react";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import store from "./store/store";
import { useMemo } from "react";
import LoginPage from "./pages/login/LoginPage";
import Ad from "./pages/Ad/Ad";
import { Home } from "./pages/Home/Home";
import Navigation from "./navigation/navigation";
import RegisterPage from "./pages/login/RegisterPage";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Expeditions from "./pages/Expeditions/Expeditions";
import AdminAd from "./pages/Ad/AdminAd";
import AdminAdForm from "./pages/Ad/AdminAdFrom";
import Create from '../src/pages/Uzytkownicy/Create'
import Update from '../src/pages/Uzytkownicy/Update'
import Read from '../src/pages/Uzytkownicy/Read'
import Panel from "./pages/Uzytkownicy/Panel";

function App() {
  const message = useSelector((state) => state.message);
  const type = useSelector((state) => state.type);
  const [theme, setTheme] = useState(false);
  const user = localStorage.getItem("account");

  return (
    <div className="" style={{ background: "#8FBC8F" }}>
      <BrowserRouter>
        <Navigation
          type={
            !!user && JSON.parse(user).data.roles.includes("admin")
              ? 2
              : user
              ? 1
              : 0
          }
        >
          <label className="switch">
            <input
              type="checkbox"
              onChange={() => {
                setTheme((prev) => !prev);
              }}
            />
            <span className="slider round"></span>
          </label>
        </Navigation>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            element={
              <ProtectedRoute
              
                isAllowed={
                  !!user && JSON.parse(user).data.roles.includes("user")
                }
              />
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/ogloszenia" element={<Ad />} />
            <Route path="/ekspedycje" element={<Expeditions />} />
          </Route>
          <Route
            element={
              <ProtectedRoute
                isAllowed={
                  !!user && JSON.parse(user).data.roles.includes("admin")
                }
              />
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/admin/ogloszenia" element={<AdminAd />} />
            <Route path="/admin/ogloszenia/nowe" element={<AdminAdForm/>}/>
            <Route path="/ekspedycje" element={<Expeditions />} />
            <Route path='/admin/create' element={<Create/>}></Route>
        <Route path='/admin/update/:id' element={<Update/>}></Route>
        <Route path='/admin/read/:id' element={<Read/>}></Route>
        <Route path="/uzytkownicy" element={<Panel/>}></Route>
          </Route>
          <Route path="/login" exact element={<LoginPage />}></Route>
          <Route path="/register" exact element={<RegisterPage />}></Route>
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
          {/* <Route path='/create' element={<Create/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/read/:id' element={<Read/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
