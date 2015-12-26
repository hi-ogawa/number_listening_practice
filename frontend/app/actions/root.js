import {getRandomUser, loginUser} from "../utils/helper";

export function pressButton() {
  return {
    type: "TOGGLE_BUTTON"
  };
};

// NOTE: redux-thunk: https://github.com/rackt/redux/blob/master/examples/async/actions/index.js#L38-L45
export function throwRequest(requestType, asyncFunction, args) {
  return dispatch => {
    dispatch({
      type: "THROW_REQUEST",
      requestType,
      args
    });
    return asyncFunction(args)
      .then((resp) => {
        dispatch({
          type: "RECEIVE_REQUEST",
          requestType,
          status: "success",
          resp
        });
      })
      .catch((resp) => {
        dispatch({
          type: "RECEIVE_REQUEST",
          requestType,
          status: "error",
          resp
        });
      });
  };
}
