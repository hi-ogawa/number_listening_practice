import React from "react";
import {connect} from "react-redux";

import template from "./Main.rt";
import {pressButton} from "../../actions/root";

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

console.log(template);
const Main = (props) => template.call(props)
// const Main = (props) => template.call(props)

// NOTE: proptypes is not mandatory with react-redux?
Main.propTypes = {
  pressed: React.PropTypes.bool.isRequired,
  onButtonClick: React.PropTypes.func.isRequired
};

export default connect(stateProps, dispatchProps)(Main);
