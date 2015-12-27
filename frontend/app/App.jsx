import "!style!css!less!bootstrap/less/bootstrap.less";

import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

import Main from "./components/Main/Main.jsx";
import rootReducer from "./reducers/root";
import {initialTokenRefresh, periodicalTokenRefresh} from "./actions/root";
import {getToken} from "./utils/helper";

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

store.dispatch(initialTokenRefresh());

// TODO: what if this periodical refreshing returns error because of trivial network cutoff?
//       so we shouldn't redirect user to login page even if this action returns error.
//       (just showing some error message like trello.)
window.setInterval(() => {
  if (getToken()) {
    store.dispatch(periodicalTokenRefresh());
  }
}, 60 * 60 * 1000);
