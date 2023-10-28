import {
  MESSAGE_ERROR,
  MESSAGE_SUCCES,
} from "../actions/messageBagActionsTypes";
const initState = {
  message: "",
};
const messageBagReducer = (state = initState, action) => {
  switch (action.type) {
    case MESSAGE_SUCCES:
      return {
        ...state,
        type: "alert alert-success",
        message: action.message,
      };
    case MESSAGE_ERROR:
      return {
        ...state,
        type: "alert alert-danger",
        message: action.message,
      };
    default:
      return {
        ...state,
        type: "",
        message: "",
      };
  }
};
export default messageBagReducer;
