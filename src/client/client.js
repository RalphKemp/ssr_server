// Startup point for the client side app
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// remember this is the client side, which will be using BrowserRouter
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// thunk to handle async action creators
import { Provider } from 'react-redux';
// ties store, used to communicate data from store to connect components
import Routes from "./Routes";

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);

// pass store as a prop to our provider tag, so now the provider has
// a reference to the redux store, any time the redux store changes,
// the provider will alert any connected componentns in the app that
// they need to re-render.
