import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import messageBagReducer from "./messageBagReducer";
import annouceReducer from "./annoucesReducer";
export default combineReducers({
  loginReducer,
  messageBagReducer,
  annouceReducer
});
