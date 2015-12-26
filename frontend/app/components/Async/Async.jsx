import React from "react";
import {connect} from "react-redux";

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

const Async = ({onRequestButtonClick, requestState, resp}) => {
  return (
    <div>
      <button onClick={onRequestButtonClick}> Start Request </button>
      <div>
      {(() => {
        switch(requestState){
          case "NOT_STARTED":
            return "not started";
          case "STARTED":
            return "started";
          case "FINISHED":
            return (
              <div>
                "finished"
                <img src={resp.data.avatar} />
                <PreJSON json={resp.data}/>
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
