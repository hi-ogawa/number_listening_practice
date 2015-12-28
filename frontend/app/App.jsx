import "!style!css!less!bootstrap/less/bootstrap.less";

import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {Router, Route} from "react-router";
import {createHistory} from "history";
import {syncReduxAndRouter, routeReducer} from "redux-simple-router";

import rootReducers from "./reducers/root";
import {initialTokenRefresh, periodicalTokenRefresh} from "./actions/root";
import {getToken} from "./utils/helper";
import routes from "./config/routes.jsx";

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

const store = createStoreWithMiddleware(
  combineReducers(Object.assign({}, rootReducers, {
    routing: routeReducer
  }))
);
const history = createHistory();

syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
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
