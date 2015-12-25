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

// import Async from "../Async/Async"
// const Main = (props) => {
//   return (
//     <div>
//       <p>
//         {props.pressed ? "true" : "false"}
//       </p>
//       Hello, easy component syntax.
//       <button
//         onClick={props.onButtonClick}
//       > + </button>
//       <Async />
//     </div>
//   )
// }
const Main = (props) => template.call(props)

// NOTE: proptypes is not mandatory with react-redux?
Main.propTypes = {
  pressed: React.PropTypes.bool.isRequired,
  onButtonClick: React.PropTypes.func.isRequired
};

export default connect(stateProps, dispatchProps)(Main);
