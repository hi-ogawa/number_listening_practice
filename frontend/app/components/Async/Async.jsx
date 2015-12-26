import React from "react";
import {connect} from "react-redux";

import template from "./Async.rt";
import PreJSON from "../PreJSON.jsx";
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

const Async = (props) => {
// NOTE: rt seems not be able to pass an object to nested component
//  return template.call(
//    Object.assign({PreJSON}, props)
//  );
  return (
    <div>
      <button onClick={props.onRequestButtonClick}> Start Request </button>
      <div>
      {(() => {
        switch(props.requestState){
          case "NOT_STARTED":
            return "not started";
          case "STARTED":
            return "started";
          case "FINISHED":
            return (
              <div>
                "finished"
                <img src={props.resp.data.avatar_url} />
                <PreJSON json={props.resp.data}/>
              </div>
            );
          case "ERROR":
            return "error";
      }})()}
      </div>
   </div>
  );
}

Async.propTypes = {
  requestState: React.PropTypes.string.isRequired,
  resp: React.PropTypes.object,
  onRequestButtonClick: React.PropTypes.func.isRequired
};


export default connect(stateProps, dispatchProps)(Async);
