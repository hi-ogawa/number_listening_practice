import React from "react";
import {connect} from "react-redux";

import template from "./Async.rt";
import {throwRequest} from "../../actions/root";

const stateProps = (state) => {
  return {
    requestState: state.async.requestState
  }
};

const dispatchProps = (dispatch) => {
  return {
    onRequestButtonClick() {
      dispatch(throwRequest());
    }
  }
};

const Async = (props) => template.call(props)
Async.propTypes = {
  requestState: React.PropTypes.string.isRequired,
  onRequestButtonClick: React.PropTypes.func.isRequired
};


export default connect(stateProps, dispatchProps)(Async);
