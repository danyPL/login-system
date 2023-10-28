import {
  ANNOUCE_ADD,
  ANNOUCE_SHOW
} from '../actions/annoucesActionsTypes';

const initialState = {
  annouces: []
};

const annouceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANNOUCE_ADD:
      return {
        ...state,
        annouces: [...state.annouces, action.annouce]
      };
    case ANNOUCE_SHOW:
      return state.annouces;
    default:
      return state;
  }
};

export default annouceReducer;