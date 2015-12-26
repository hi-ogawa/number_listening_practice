import {combineReducers} from "redux";
import {setToken} from "../utils/helper";

const main = (state = {pressed: true}, action) => {
  switch (action.type) {
  case "TOGGLE_BUTTON":
    return {pressed: !state.pressed};
  default:
    return state;
  }
}

const async = (state = {requestState: "NOT_STARTED"}, action) => {
  if(action.requestType !== "GET_RANDOM_USER"){return state;};
  switch (action.type) {
  case "THROW_REQUEST":
    return {requestState: "STARTED"};
  case "RECEIVE_REQUEST":
    return {
      requestState: (action.status === "success" ? "FINISHED" : "ERROR"),
      resp: action.resp
    };
  default:
    return state;
  }
}

const login = (state = {user: null, requestState: "NOT_STARTED"}, action) => {
  switch (action.type) {
  case "VALIDATE_JWT":
    switch (action.status) {
    case "waiting":
      return {
        user: null,
        requestState: "NOT_STARTED"
      }
    case "success":
      return {
        user: action.resp.data.user,
        requestState: "FINISHED"
      }
    case "error":
      return {
        user: null,
        requestState: "NOT_STARTED"
      }
    }
  case "LOGOUT":
    setToken();
    return {
      requestState: "NOT_STARTED",
      user: null
    }
  }
  if(action.requestType !== "LOGIN_USER"){return state;};
  switch (action.type) {
  case "THROW_REQUEST":
    return {
      requestState: "STARTED",
      user: null
    };
  case "RECEIVE_REQUEST":
    if (action.status === "success") {
      setToken(action.resp.data.token);
      return {
        requestState: "FINISHED",
        user: action.resp.data.user
      }
    }else{
      return {
        requestState: "ERROR",
        user: null
      }
    }
  default:
    return state;
  }
}

export default combineReducers({
  main,
  async: async, // NOTE: `async` might be recognized as a special keyword.
  login
});
