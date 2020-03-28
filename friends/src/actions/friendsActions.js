import { axiosWithAuth } from "../utils/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const GET_FRIENDS_START = "GET_FRIENDS_START";
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";
export const GET_FRIENDS_FAIL = "GET_FRIENDS_FAIL";
export const FRIEND_START = "FRIENDS_START";
export const FRIEND_SUCCESS = "FRIENDS_SUCCESS";
export const FRIEND_FAIL = "FRIENDS_FAIL";

export const LoginUser = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post("http://localhost:5000/api/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => {
      console.log("Login error: ", err);
      dispatch({
        type: LOGIN_FAIL,
        payload: `Error ${err.response.status}: ${err.response.statusText}`
      });
    });
};
export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS_START });
  axiosWithAuth()
    .get(`http://localhost:5000/api/friends`)
    .then(res => {
      dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(`Retrieve error: ${err}`);
      dispatch({
        type: GET_FRIENDS_FAIL,
        payload: `Error ${err.response.status}: ${err.response.statusText}`
      });
    });
};
export const newFriend = noob => dispatch => {
  dispatch({ type: FRIEND_START });
  axiosWithAuth()
    .post("http://localhost:5000/api/friends", noob)
    .then(res => {
      dispatch({ type: FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FRIEND_FAIL,
        payload: `Error ${err.response.status}: ${err.response.statusText}`
      });
    });
};
