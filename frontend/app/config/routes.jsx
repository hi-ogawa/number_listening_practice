import React from "react";
import {Route, IndexRoute} from "react-router";

import Main from "../components/Main.jsx";
import Home from "../components/Home.jsx";
import Profile from "../components/Profile.jsx";

var routes = (
  <Route path="/" component={Main}>
    <Route path="profile/:username" component={Profile} />
    <IndexRoute component={Home} />
  </Route>
)

export default routes;
