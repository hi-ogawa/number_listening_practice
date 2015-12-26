import "!style!css!less!bootstrap/less/bootstrap.less"

import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

import Main from "./components/Main/Main.jsx";
import rootReducer from "./reducers/root";
import {initialUserCheck} from "./actions/root";

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Main />
    </div>
  </Provider>,
  document.getElementById("app")
);

store.dispatch(initialUserCheck());
