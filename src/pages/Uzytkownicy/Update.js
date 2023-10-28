import React,{useState,useEffect} from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
import axios from "axios";

const Update = () =>{
    //const [data,setData] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
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
    useEffect(() => {
        axios.get(`http://localhost:3001/users/read/${id}`)
        .then(res => {
                setValues(res.data['data']);
            
        })
        .catch(err => console.log(err))
    }, []);
    const HandleUpdate = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:3001/users/update/${id}`,values)
        .then((e)=>{
            console.log(e)
            navigate('/')
        })
        .catch((re)=>{
            console.log(re);    
        })
    }
    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow p-5 pt-3 pb-5 rounded">
        <h1>Edytuj użytkownika</h1>
        <form onSubmit={HandleUpdate}> 
        <div className="mb-2">
                <label htmlFor="username">Nazwa:</label>
                <input type="text" name="username" value={values.username}required className="form-control" placeholder="Wpisz nazwe użytkownika" onChange={(e)=>{
                    setValues({...values,username:e.target.value})}}/>
                </div>
                <div className="mb-2">
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" value={values.email} required className="form-control" placeholder="Wpisz email" onChange={(e)=>{
                    setValues({...values,email:e.target.value})}
                    }/>
                </div>
                <div className="mb-2">
                <label htmlFor="email">Hasło:</label>
                <input type="password" name="text" value={values.password}required className="form-control" placeholder="Wpisz hasło" onChange={(e)=>{
                    setValues({...values,password:e.target.value})}
                    }/>
                </div>
                <div className="mb-3">
                <label htmlFor="discord">Nick Discord:</label>
                <input type="text" name="dcname" required value={values.dcname}className="form-control" placeholder="Wpisz nazwe użytkownika na discordzie" onChange={(e)=>{
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
                <input type="number" max={50} value={values.stats.level}name="level" required className="form-control" placeholder="Wpisz poziom" onChange={(e)=>{
                    setValues({...values,stats: {rank:values.stats.rank, level: parseInt(e.target.value)}})}}/>
                </div>
                <button className="btn btn-success">Submit</button>
                <Link to="/uzytkownicy" className="btn btn-primary ms-3">Back</Link>
        </form>
        </div>
    </div>
    )
}

export default Update;