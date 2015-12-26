import {getRandomUser} from "../utils/helper";

export function pressButton() {
  return {
    type: "TOGGLE_BUTTON"
  };
};

// redux-thunk: https://github.com/rackt/redux/blob/master/examples/async/actions/index.js#L38-L45
export function throwRequest() {
  return dispatch => {
    dispatch({type: "THROW_REQUEST"});
    return getRandomUser()
      .then((resp) => {
        dispatch(receiveRequestSuccess(resp));
      })
      .catch((resp) => {
        dispatch(receiveRequestError(resp));
      });
  };
};

export function receiveRequestSuccess(resp) {
  return {
    type: "RECEIVE_REQUEST",
    status: "success",
    resp
  };
};

export function receiveRequestError(resp) {
  return {
    type: "RECEIVE_REQUEST",
    status: "error",
    resp
  }
}
