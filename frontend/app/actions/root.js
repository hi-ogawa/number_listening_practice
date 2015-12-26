import {validateAndRefreshToken} from "../utils/helper";

export function pressButton() {
  return {
    type: "TOGGLE_BUTTON"
  };
};

export function logout() {
  return {
    type: "LOGOUT"
  };
};

export function periodicalTokenRefresh() {
  return dp => {
    validateAndRefreshToken()
      .then((resp) => {
        dp({
          type: "TOKEN_REFRESH",
          status: "success",
          resp
        });
      })
      .catch((resp) => {
        dp({
          type: "TOKEN_REFRESH",
          status: "error"
        });
      });
  }
}

export function initialTokenRefresh() {
  return dispatch => {
    dispatch({
      type: "VALIDATE_JWT",
      status: "waiting"
    });
    return validateAndRefreshToken()
      .then((resp) => {
        dispatch({
          type: "VALIDATE_JWT",
          status: "success",
          resp
        })
      })
      .catch((resp) => {
        dispatch({
          type: "VALIDATE_JWT",
          status: "error",
          resp
        })
      });
  }
}

// NOTE: redux-thunk: https://github.com/rackt/redux/blob/master/examples/async/actions/index.js#L38-L45
// TODO: generalize for any async actions
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
