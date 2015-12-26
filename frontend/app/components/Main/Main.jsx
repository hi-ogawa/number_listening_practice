import React from "react";
import {connect} from "react-redux";

import {pressButton} from "../../actions/root";
import Async from "../Async/Async.jsx"


const stateProps = (state) => {
  return {
    pressed: state.main.pressed
  }
};

const dispatchProps = (dispatch) => {
  return {
    onButtonClick() {
      dispatch(pressButton());
    }
  }
};

const Main = ({pressed, onButtonClick}) => (
  <div>
    <p>
      {pressed ? "true" : "false"}
    </p>
    Hello, easy component syntax.
    <button
      onClick={onButtonClick}
    > + </button>
    <Async />
  </div>
);

Main.propTypes = {
  pressed: React.PropTypes.bool.isRequired,
  onButtonClick: React.PropTypes.func.isRequired
};

export default connect(stateProps, dispatchProps)(Main);
