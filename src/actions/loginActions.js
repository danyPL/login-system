import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGOUT,
} from "./loginActionsTypes";
import { loginService } from "../services/http/loginService";
import messageBagActions from "./messageBagActions";

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user,
});
const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});
const loginRequest = (user) => ({
  type: LOGIN_REQUEST,
  user,
});

// system logowania

const login = (username, password) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    await loginService.login(username, password).then(
      (user) => {
        localStorage.setItem("account", JSON.stringify(user));
        dispatch(loginSuccess(user));
        dispatch(messageBagActions.success("Zalogowano"));
      },
      (error) => {
        dispatch(loginFailure(error));
        dispatch(messageBagActions.error("Zły login lub hasło"));
      }
    );
  };
};

const templogin = (username,password) =>{
  return async (dispatch) =>{
    dispatch(loginRequest());
    await loginService.templogin(username,password).then(
      (user) => {
        localStorage.setItem("account", JSON.stringify(user));
        dispatch(loginSuccess(user));
        dispatch(messageBagActions.success("Zalogowano"));
      },
      (error) => {
        dispatch(loginFailure(error));
        dispatch(messageBagActions.error("Zły login lub hasło"));
      }
    )
  }
}
const register = (email, username, password) => {
  return async (dispatch) => {
    await loginService.register(email,username,password).then((user)=>{
      console.log("Stworzono użytkownika")
    })
  };
};
const logout = () => {
  loginService.logout();
  return { type: LOGOUT };
};
export const loginActions = {
  login,
  templogin,
  logout,
  register
};
