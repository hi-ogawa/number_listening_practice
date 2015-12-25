import React from "react";
import {connect} from "react-redux";

import template from "./Main.rt";
import {pressButton} from "../../actions/root";
import Async from "../Async/Async.js"


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

const Main = ({pressed, onButtonClick}) => {
  return template.call({
    pressed,
    onButtonClick,
    Async
  });
}

// NOTE: proptypes is not mandatory with react-redux?
Main.propTypes = {
  pressed: React.PropTypes.bool.isRequired,
  onButtonClick: React.PropTypes.func.isRequired
};

export default connect(stateProps, dispatchProps)(Main);
