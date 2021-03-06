"use strict";

window.ENV = __ENV__; //eslint-disable-line

import "./libs";
import "bootstrap/scss/bootstrap.scss";
// add React to global namespace so you don't have to include React in every jsx view
window.React = require("react");

import ReactDOM from "react-dom";
import Routes from "./routes";
import { Provider } from "react-redux";

import store from "./config/store";

ReactDOM.render(
    <Provider store={store}>
        {Routes()}
    </Provider>,
    document.getElementById("app-root")
);
