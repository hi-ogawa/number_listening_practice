import React from "react";
import {connect} from "react-redux";

import {throwRequest, logout} from "../actions/root";
import {loginUser} from "../utils/helper";

const stateProps = (state) => {
  return {
    requestState: state.login.requestState,
    user: state.login.user
  }
};

const dispatchProps = (dispatch) => {
  return {
    login(username, password) {
      dispatch(throwRequest("LOGIN_USER", loginUser, {username, password}));
    },
    logout() {
      dispatch(logout());
    }
  }
};

const Login = ({login, logout, requestState, user}) => {
  var usernameRef;
  var passwordRef;
  const loginWithoutRefresh = (e) => {
    e.preventDefault();
    login(usernameRef.value, passwordRef.value);
  };
  const logoutWithClearInput = (e) => {
    usernameRef.value = "";
    passwordRef.value = "";
    logout();
  };
  return (
    <div>
      <form onSubmit={loginWithoutRefresh}>
        <input type="text" ref={(ref) => usernameRef = ref} />
        <input type="password" ref={(ref) => passwordRef = ref} />
        <button type="submit"> Login </button>
      </form>
      { requestState == "NOT_STARTED" ? "let's login!" : ""}
      { requestState == "STARTED" ? "waiting" : ""}
      { requestState == "FINISHED" ?
        <div>
          you're logged in: {user.username}
          <button onClick={logoutWithClearInput}> Logout </button>
        </div>
        : ""}
      { requestState == "ERROR" ? "you're a wrong person :(" : ""}
    </div>
  );
}

Login.propTypes = {
  login: React.PropTypes.func.isRequired,
  logout: React.PropTypes.func.isRequired,
  requestState: React.PropTypes.string.isRequired,
  user: React.PropTypes.object,
};

export default connect(stateProps, dispatchProps)(Login);
