"use strict";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import UsersRoute from "./users_route";

const App = () => {
    return (
        <div class="content-root">
            <h1> Hello, World! </h1>
            <h2> Base config: {JSON.stringify(window.ENV)} </h2>
        </div>
    );
};

export default () => (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/users" component={UsersRoute} />
        </div>
    </Router>
);
