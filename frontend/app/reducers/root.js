import {combineReducers} from "redux";

const initialState = {
  pressed: true
}

const main = (state = initialState, action) => {
  switch (action.type) {
  case "button":
    return {pressed: !state.pressed}
  default:
    return state
  }
}


export default combineReducers({
  main
});
