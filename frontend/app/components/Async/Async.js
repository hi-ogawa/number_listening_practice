import React from "react";
import {connect} from "react-redux";

import template from "./Async.rt";
import {throwRequest} from "../../actions/root";

const stateProps = (state) => {
  return {
    requestState: state.async.requestState,
    resp: state.async.resp
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
  resp: React.PropTypes.object,
  onRequestButtonClick: React.PropTypes.func.isRequired
};


export default connect(stateProps, dispatchProps)(Async);
