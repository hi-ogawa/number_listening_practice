import {combineReducers} from "redux";

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

const login = (state = {requestState: "NOT_STARTED"}, action) => {
  if(action.requestType !== "LOGIN_USER"){return state;};
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

export default combineReducers({
  main,
  async: async, // NOTE: `async` might be recognized as a special keyword.
  login
});
