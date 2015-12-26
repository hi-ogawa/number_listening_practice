import "!style!css!less!bootstrap/less/bootstrap.less"

import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

import Main from "./components/Main/Main";
import rootReducer from "./reducers/root";

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <div>
      <Main />
    </div>
  </Provider>,
  document.getElementById("app")
);
