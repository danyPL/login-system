import routes from "../../constans/http-routes";
import axios from "axios";

const login = async (username, password) => {
  const res = await axios.post(routes.server + routes.route.api.login.post, {
    username: username,
    password: password,
  });

  return res;
};
const register = async (email,username,password)=>{
  const res = await axios.post(routes.server + routes.route.api.register.post,{
    email:email,
    username:username,
    password:password
  })
  
  return res;
} 
const templogin = async (username,password) =>{
  const res = await axios.get('localhost:3001/users/login',{
    username:username,
    password:password
  })
  
  return res;
}
const logout = () => {
  localStorage.removeItem("account");
};
export const loginService = {
  login,
  templogin,
  logout,
  register
};
