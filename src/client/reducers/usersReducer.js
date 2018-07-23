import { FETCH_USERS } from '../actions';
// FETCH_USERS is a named export, so we have to use the curly braces


export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};
