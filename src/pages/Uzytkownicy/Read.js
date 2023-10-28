import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Read = () =>{
    const [data,setData] = useState(null)
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3001/users/read/${id}`).then(e=>{
         setData(e.data['data'])
        })
     },[])
    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
            <h3>Detail of User</h3>
            <div className="mb-2">
            <strong>Name: {data.username}</strong>
            </div>
            <div className="mb-2">
            <strong>Email: {data.email}</strong>
            </div>
            <div className="mb-2">
            <strong>Discord ID: {data.dcname}</strong>
            </div>
            <div className="mb-2">
            <strong>Rank: {data.stats.rank}</strong>
            </div>
            <Link to={`/admin/update/${id}`} className="btn btn-success">Edit</Link>
            <Link to={`/`} className="btn btn-primary ms-3">Back</Link>

            </div>
        </div>
    )   
}

export default Read;