import {
  MESSAGE_CLEAR,
  MESSAGE_SUCCES,
  MESSAGE_ERROR,
} from "./messageBagActionsTypes";

const success = (message) => ({
  type: MESSAGE_SUCCES,
  message,
});
const error = (message) => ({
  type: MESSAGE_ERROR,
  message,
});
const clear = () => ({
  type: MESSAGE_CLEAR,
});
const messageBagActions = {
  success,
  error,
  clear,
};
export default messageBagActions;
