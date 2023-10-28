import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import messageBagActions from "../actions/messageBagActions";
import { loginService } from "../services/http/loginService";
import { loginActions } from "../actions/loginActions";
import navtype from "./navlist";

import { Link } from "react-router-dom";

export const Navigation = ({children,type}) => {
  const [userinfo, setUserinfo] = useState(""); // Przechowujesz userinfo w stanie komponentu
  const isLogged = useSelector((state) => state.loginReducer.isLogged);
  const dispatch = useDispatch();
  const user = localStorage.getItem("account");

  useEffect(() => {
    console.log("useEffect is running with isLogged:", isLogged);
    if (user && isLogged) {
      const parsedUser = JSON.parse(localStorage.getItem("account"));

      if (parsedUser && parsedUser.data && parsedUser.data.email) {
        setUserinfo(parsedUser.data.email);
        dispatch(messageBagActions.clear());
      }
    }
  }, [isLogged]);
  return (
   

	
<nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#2e8b57"}}>
    <a class="navbar-brand" href="#"><img src="./symbol.svg"/></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     
        <ul class="navbar-nav ml-auto">
        {
       navtype[type].map(e=>(
        <li class="nav-item active" key={e.id}>
                <a class="nav-link"><Link className="nav-link" style={{color:"#980000",fontWeight:"bold",textTransform:"uppercase"}}  to={e.link}>{e.name}</Link></a>
            </li>
       ))
      }
       
        </ul>

       
    </div>
    {children}
    {
     <a class="nav-link " href="#">{isLogged ? `Witaj, ${userinfo}` : "Jesteś niezalogowany"}</a>
}
    {navtype[0] && (
      <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" type="button" href="#" data-toggle="modal" data-target="#myModal"><Link className="btn btn-primary text-white btn-sm p-1 m-1" to={"/login"}>Sign In</Link></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" type="button" href="#" data-toggle="modal" data-target="#myModal"><Link className=" btn btn-danger text-white btn-sm p-1 m-1" to={"/register"}>Register</Link></a>
            </li>
        </ul>
    )
}
{
        isLogged && (
          <a class="nav-link" href="#"><button className="btn btn-danger btn-sm p-1 m-1" onClick={()=>{
            window.location.reload(true)
            dispatch(loginActions.logout())}}>Wyloguj się</button></a>
        ) 
      }

</nav>
  );
};
export default Navigation;
