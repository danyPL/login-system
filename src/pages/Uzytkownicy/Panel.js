import axios from 'axios'
import React, { useEffect, useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';

import Accordion from 'react-bootstrap/Accordion';
const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
font-weight:bold;

`
const Panel = () =>{
    const [data,setData] = useState([]);

    const navigate = useNavigate()
    useEffect(()=>{
       axios.get('http://localhost:3001/users').then(e=>{
        console.log(e.data['data'])
        setData(e.data['data'])
       })
        console.log(data)
    },[])
    const HandleDelete = (id) =>{
    let confirm = window.confirm('czy chcesz usunąć użytkownika?');
    if(confirm) {
        axios.delete(`http://localhost:3001/users/${id}`).then((er)=>{
     window.location.reload(true)
    }).catch((er)=>console.log(er))
    }
}
    return (
        <Suspense fallback={<h1>Ładowanie...</h1>}>
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>

        <h1>Użytkownicy</h1>
        <div className='w-50 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'>
       
        <Link to="/admin/create" className='btn btn-success'>Dodaj +</Link>

        </div>
        <table className='table table-striped'>
        <thead>
            <tr>
              <th>ID</th>
              <th>Nazwa</th>
              <th>Email</th>
              <th>Discord</th>
              <th>Ranga</th>
              <th>Poziom</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.roles.includes("admin")? "🎇" : "🤡 "}{e.username}</td>
                  <td>{e.email}</td>
                  <td>{e.dcname}</td>
                  <td>{e.stats.rank}</td>
                  <td>{e.stats.level}</td>
                  <td>
                                <Dropdown className=''>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Akcje
      </Dropdown.Toggle>
      <Container>
      <Dropdown.Menu>
        <Dropdown.Item ><Link to={`/admin/read/${e.id}/`} className='btn btn-sm btn-info me-2 text-center'>Info</Link></Dropdown.Item>
        <Dropdown.Item ><Link to={`/admin/update/${e.id}`} className='btn btn-sm btn-primary me-2 text-center'>Edytuj</Link></Dropdown.Item>
        <Dropdown.Item ><button onClick={ed=>HandleDelete(e.id)}className='btn btn-sm btn-danger text-center'>Usuń</button></Dropdown.Item>
      </Dropdown.Menu>
      </Container>
    </Dropdown>
                                </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>

        </div>
        </Suspense>

    )
}

export default Panel;