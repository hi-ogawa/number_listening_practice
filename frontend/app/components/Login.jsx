import React from "react";
import {connect} from "react-redux";

const Login = (props) => (
  <div>
    <form>
      <input type="text"/>
      <input type="password"/>
      <button type="submit"> Login </button>
    </form>
  </div>
)

export default Login;
