import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/actions";

const initialState = {
  isLoading: false,
  error: "",
  credentials: {
    username: "",
    password: ""
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        ...state.credentials,
        credentials: {
          [action.name]: action.value
        }
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
}
export default reducer;
