import {combineReducers} from "redux";

const mainInitialState = {
  pressed: true
}

const main = (state = mainInitialState, action) => {
  switch (action.type) {
  case "button":
    return {pressed: !state.pressed};
  default:
    return state;
  }
}

// TODO: follow this: http://rackt.org/redux/docs/advanced/AsyncActions.html
const async = (state = {requestState: "NOT_STARTED"}, action) => {
  switch (action.type) {
  case "throwRequest":
    console.log("request throwed")
    return {requestState: "STARTED"};
  default:
    return state;
  }
}

export default combineReducers({
  main,
  async
});
