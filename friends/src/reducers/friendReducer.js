import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_FRIENDS_START,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAIL,
  FRIEND_START,
  FRIEND_SUCCESS,
  FRIEND_FAIL
} from "../actions/friendsActions";

const initialState = {
  loggingIn: false,
  loggingOut: false,
  retrievingFriends: false,
  addingFriend: false,
  error: "",
  credentials: {
    username: "",
    password: ""
  },
  friends: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: ""
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case GET_FRIENDS_START:
      return {
        ...state,
        retrievingFriends: true,
        error: ""
      };
    case GET_FRIENDS_SUCCESS:
      return {
        ...state,
        retrievingFriends: false,
        error: "",
        friends: action.payload
      };
    case GET_FRIENDS_FAIL:
      return {
        ...state,
        retrievingFriends: false,
        error: action.payload
      };
    case FRIEND_START:
      return {
        ...state,
        addingFriend: true,
        error: ""
      };
    case FRIEND_SUCCESS:
      return {
        ...state,
        retrievingFriends: false,
        error: "",
        ...state.friends,
        friends: action.payload
      };
    case FRIEND_FAIL:
      return {
        ...state,
        addingFriend: false,
        error: action.payload
      };
    default:
      return state;
  }
}
export default reducer;
