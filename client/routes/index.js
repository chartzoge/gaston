"use strict";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
    return (
        <div class="content-root">
            <h1> Hello, {window.ENV.user.name}! </h1>
        </div>
    );
};

export default () => (
    <Router basename={window.ENV.rootUri + "/"}>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </Router>
);
