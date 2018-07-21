// Startup point for the client side app
import React from "react";
import ReactDOM from "react-dom";
import BrowserRouter from "react-router-dom";
// remember this is the client side, which will be using BrowserRouter
import Routes from "./Routes";

ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.querySelector("#root")
);
