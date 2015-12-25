import "!style!css!less!bootstrap/less/bootstrap.less"

import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import Main from "./components/Main/Main";
import Async from "./components/Async/Async";
import rootReducer from "./reducers/root";

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <div>
      <Main />
    </div>
  </Provider>,
  document.getElementById("app")
);
