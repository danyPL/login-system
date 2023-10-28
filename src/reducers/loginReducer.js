import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGOUT,
} from "../actions/loginActionsTypes";
let user = undefined;

user =
  localStorage.getItem("account") === undefined
    ? null
    : JSON.parse(localStorage.getItem("account"));

const initstate = user
  ? { isLogged: true, user: user, loginPending: false }
  : { isLogged: false, user: null, loginPending: false };

const loginReducer = (state = initstate, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loginPending: true,
        isLogged: false,
      };
    case LOGIN_SUCCESS:
      return {
        loginPending: false,
        isLogged: true,
        user: action.user,
      };
    case LOGIN_FAILURE:
      return {
        loginPending: false,
        isLogged: false,
      };
    case LOGOUT:
      return {
        isLogged: false,
        user: null,
      };

    default:
      return state;
  }
};
export default loginReducer;
