import React from "react";
import {Route, IndexRoute} from "react-router";

import Main from "../components/Main/Main.jsx";
import Question from "../components/Question.jsx";

export default (
  <Route path="/" component={Main} >
    <IndexRoute component={Question} />
  </Route>
);
