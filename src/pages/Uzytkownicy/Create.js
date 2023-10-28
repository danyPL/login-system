import axios from "axios";
import React, { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import System from "./System";
import { useEffect } from "react";
const Create = () =>{
    const [values,setValues] = useState({
        username:'',
        email:'',
        password:'',
        dcname:'',
        stats:{
        level:'',
        rank:0
        },
    })
   useEffect(()=>{
    console.log(values)
   },[values])
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(values)
        axios.post('http://localhost:3001/users/register',values)
        .then((res)=>{
            console.log(res);
            navigate('/')
        })
    }
    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow p-5 pt-3 pb-5 rounded">
            <h1>Dodaj użytkownika</h1>
            <form onSubmit={handleSubmit}> 
                <div className="mb-2">
                <label htmlFor="username">Nazwa:</label>
                <input type="text" name="username" required className="form-control" placeholder="Wpisz nazwe użytkownika" onChange={(e)=>{
                    setValues({...values,username:e.target.value})}}/>
                </div>
                <div className="mb-2">
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" required className="form-control" placeholder="Wpisz email" onChange={(e)=>{
                    setValues({...values,email:e.target.value})}
                    }/>
                </div>
                <div className="mb-2">
                <label htmlFor="email">Hasło:</label>
                <input type="text" name="password" className="form-control" placeholder="Wpisz hasło" onChange={(e)=>{
                    setValues({...values,password:e.target.value})}
                    }/>
                </div>
                <div className="mb-3">
                <label htmlFor="discord">Nick Discord:</label>
                <input type="text" name="dcname" className="form-control" placeholder="Wpisz nazwe użytkownika na discordzie" onChange={(e)=>{
                    setValues({...values,dcname:e.target.value})}}/>
                </div>
                <div className="mb-3">
                <label htmlFor="rank">Rank:</label>
                <select className="form-control"value={values.stats.rank} onChange={(e)=>{
                    setValues({...values,stats: {rank:e.target.value, level: values.stats.level}})}} name="rank"> 
                <option value={"Adept"}>Adept</option>
                <option value={"Padawn"}>Padawan</option>
                <option value={"Rycerz"}>Rycerz</option>
                <option value={"Mistrz"}>Mistrz</option>

                </select>
                </div>
                <div className="mb-3">
                <label htmlFor="discord">Poziom:</label>
                <input type="number" max={50} name="level" className="form-control" placeholder="Wpisz poziom" onChange={(e)=>{
                    setValues({...values,stats: {rank:values.stats.rank, level: parseInt(e.target.value)}})}}/>
                </div>
                <button className="btn btn-success">Submit</button>
                <Link to="/" className="btn btn primary ms-3">Back</Link>
            </form>
            </div>
        </div>
    )
}

export default Create;