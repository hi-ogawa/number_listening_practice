require("!style!css!less!bootstrap/less/bootstrap.less");

import React from "react"
import ReactDOM from "react-dom"
import {Router} from "react-router"

import {routes} from "./config/routes.jsx"

ReactDOM.render(
  React.createElement(Router, null, routes),
  document.getElementById("app")
);
