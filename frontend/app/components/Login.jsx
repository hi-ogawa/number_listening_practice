import React from "react";
import {connect} from "react-redux";

import {throwRequest} from "../actions/root";
import {loginUser} from "../utils/helper";

const stateProps = (state) => {
  return {
    requestState: state.login.requestState
  }
};

const dispatchProps = (dispatch) => {
  return {
    login(username, password) {
      dispatch(throwRequest("LOGIN_USER", loginUser, {username, password}));
    }
  }
};

const Login = ({login, requestState}) => {
  var usernameRef;
  var passwordRef;
  const loginWithoutRefresh = (e) => {
    e.preventDefault();
    login(usernameRef.value, passwordRef.value);
  };
  // NOTE: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute
  //  > The ref attribute can be a callback function, and
  //  > this callback will be executed immediately after the component is mounted.
  return (
    <div>
      <form onSubmit={loginWithoutRefresh}>
        <input type="text" ref={(ref) => usernameRef = ref} />
        <input type="password" ref={(ref) => passwordRef = ref} />
        <button type="submit"> Login </button>
      </form>
      { requestState == "STARTED" ? "waiting" : ""}
      { requestState == "FINISHED" ? "you're logged in" : ""}
      { requestState == "ERROR" ? "you're a wrong person :(" : ""}
    </div>
  );
}

Login.propTypes = {
  login: React.PropTypes.func.isRequired,
  requestState: React.PropTypes.string.isRequired
};

export default connect(stateProps, dispatchProps)(Login);
