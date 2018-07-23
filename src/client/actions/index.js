import axios from "axios";

export const FETCH_USERS = "fetch_users";

export default (fetchUsers = () => async dispatch => {
  const res = axios.get("http://react-ssr-api.herokuapp.com/users");
  dispatch({ type: FETCH_USERS, payload: res.data });
});
