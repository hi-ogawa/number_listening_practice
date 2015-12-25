import "!style!css!less!bootstrap/less/bootstrap.less"

import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import Main from "./components/Main.jsx";
import rootReducer from "./reducers/root";

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <Main />
  </Provider>,
  document.getElementById("app")
);
